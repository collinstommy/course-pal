
import React, { Component } from 'react'
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

class Card extends React.Component { 
  constructor(props){
    super(props);
    this.handleView = this.handleView.bind(this);
  }

  handleView () {
    console.log('go to details page');
  }

  render() {
    return (
      <LocalizationContext.Consumer>
        {config => <StyledCard className="card">
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <h5 className="card-subtitle">{this.props.author}</h5>
            <Tags>
              {this.props.tags && this.props.tags.map((tag, index) => <Tag key={index} className="badge secondary">{tag}</Tag>)}
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
}

export default Card;
