import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import '../css/paper.min.css';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';

import { sortByRating, sortByTitle } from '../utils/filters';
import Card from './Card';
import SearchControls from './SearchControls';

const ItemsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 max-width: 1000px;
 position: relative;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-direction: column;
  align-items: center;
`;

const Filters = styled.div`
  display: flex;
`;

const DisplaySettings = styled.div`
  display: flex;

  > * {
    &:not(:first-child){
      margin-left: 2rem;
    }
  }
`;

class Main extends Component {

  state = {
    filter: null
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    });
  }

  sort = () => {
    const sortMap = {
      rating: sortByRating,
      title: sortByTitle
    };

    const { filter } = this.state;
    if (filter && sortMap[filter]) {
      return sortMap[filter];
    }
    return (a, b) => { return 0 }
  }

  renderContentCards() {
    return [...this.props.data.contents]
      .sort(this.sort())
      .map((content, index) => {
        const key =  `${content.author}${content.title}`.replace(/\s/g, "");;
        return <Card key={key} {...content} />
      });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }

    return (
      <Page>
        <DisplaySettings>
          <Filters>
            <div className="form-group">
              <label htmlFor="filters">Filter By</label>
              <select id="filters" onChange={(e) => this.handleFilterChange(e)}>
                <option value="default">none</option>
                <option value="rating">Rating</option>
                <option value="title">Title</option>
              </select>
            </div>
          </Filters>
          <SearchControls />
        </DisplaySettings>
        <ItemsContainer>
          <FlipMove 
            typeName={null}
            duration={2000} 
            easing="ease-out"
          >
            {this.props.data.contents && 
              this.renderContentCards()
            }
          </FlipMove>
        </ItemsContainer>
      </Page>
    )
  }
}

const ITEMS_QUERY = gql`
  query ItemsQuery {
    contents {
      title
      type
      author
      tags
      rating
    }
  }
`

export default graphql(ITEMS_QUERY)(Main)