import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Card from './Card';
import { getFeatured } from '../reducers/index';


const ItemsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 max-width: 1000px;
 position: relative;
`;

const FeaturedCourses = ({ featuredCourses }) => {
  return <ItemsContainer>
    {featuredCourses.map((course, index) => {
      const key = `${course.author}${course.title}`.replace(/\s/g, "");
      return <Card key={key} {...course} />
    })
    }
  </ItemsContainer>
}

export default connect(state => {
  return {
    featuredCourses: getFeatured(state)
  }
})(FeaturedCourses)