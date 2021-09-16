import React, { Component } from 'react'
import '../css/paper.min.css';
import styled from 'styled-components';

import { sortByRating, sortByTitle } from '../utils/filters';
import Card from './Card';
import { connect } from 'react-redux';
import SearchControls from './SearchControls';
import { getTags, getNonFeatured, getCourses } from '../reducers/index';

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
      filter: null,
      showFeatured: false
    };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value
    });
  }

  handleTagFilterChange = (e) => {
    this.setState({
      filter: e.target.value
    });
  }

  sort() {
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
    const { showFeatured } = this.state;
    const { allCourses, excludingFeatured } = this.props;
    const course = showFeatured ? allCourses : excludingFeatured;
    return [...this.props.allCourses]
      .sort(this.sort())
      .map((content, index) => {
        const key = `${content.author}${content.title}`.replace(/\s/g, "");
        return <Card key={key}  />
      })
  }

  render() {
    const { allCourses } = this.props;

    const tags = allCourses
      .map(course => course.tags)
      .reduce((a, b) => a.concat(b))
      .filter((tag, pos, self) => {
        if (tag != null && self.indexOf(tag) == pos) {
          return true;
        }
        return false;
      });

    if (!allCourses) {
      return <div>Loading</div>
    }

    return (
      <Page>
        <Filters>
          <div className="form-group">
            <label htmlFor="filters">Sort By</label>
            <select id="filters" onChange={this.handleFilterChange}>
              <option value="default">none</option>
              <option value="rating">Rating</option>
              <option value="title">Title</option>
            </select>
          </div>
        </Filters>
        <Filters>
            <div className="form-group">
              <label htmlFor="tagFilters">Filter By</label>
              <select id="tagFilters" onChange={this.handleTagFilterChange}>
                {tags.map(tag => <option value={tag}>{tag}</option>)}
              </select>
            </div>
          </Filters>
        <SearchControls />
        <ItemsContainer>
          {allCourses != null ? this.renderContentCards() : null}
        </ItemsContainer>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allCourses: state.course,
    excludingFeatured: getNonFeatured(state)
  }
};

export default connect(mapStateToProps)(Main)