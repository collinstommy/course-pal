import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import '../css/paper.min.css';
import styled from 'styled-components';

import { sortByRating, sortByTitle } from '../utils/filters';
import Card from './Card';

const ItemsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 max-width: 1000px;
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

class Main extends Component {

  state = {
    filter: null
  }

  handleFilterChange = (e) => {
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
    if(filter && sortMap[filter]) {
      return sortMap[filter];
    }
    return (a, b) => { return 0 }
  }

  renderContentCards() {
    return [...this.props.data.contents]
      .sort(this.sort())
      .map((content, index) => {
      return <Card key={index} {...content} />
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }

    return (
      <Page>
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
        <ItemsContainer>
              {this.props.data.contents && this.renderContentCards()}
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