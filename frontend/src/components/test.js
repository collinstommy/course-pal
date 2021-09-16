
//remove class
//remove contructor
//remove this

import React from 'react'
import styled from 'styled-components';
import Rating from './Rating';
import LocalizationContext from '../utils/context';

const gutterWidth = .5
const StyledCard = styled.div`
    width: calc(33% - ${gutterWidth}rem);
    margin-bottom: .5rem;

      &:not(:last-child) {
        margin-right: ${gutterWidth}rem;
      }
  `;

const Tag = styled.span`
    &:not(:first-child) {
      margin-left: 4px;
    }
  `;

const Tags = styled.div`
    margin-bottom: .5rem;
  `;


const Copyright = styled.div`
    padding-top: 1rem;
  `;

const Card = ({ tags, author, title, rating }) => {

  const handleView = () => {
    console.log('go to details page');
  }

  const renderTags = () => {
    return tags.map((tag, index) => <Tag key={index} className="badge secondary">{tag}</Tag>);
  };

  return (
    <LocalizationContext.Consumer>
      {config => <StyledCard className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-subtitle">{author}</h5>
          <Tags>
            {tags && renderTags()}
          </Tags>
          <Rating rating={this.props.rating} />
          <button onClick={this.handleView}>View</button>
          <Copyright>
            {config.en}
            {config.es}
          </Copyright>
        </div>
      </StyledCard>
      }
    </LocalizationContext.Consumer>
  )
}

export default Card;
