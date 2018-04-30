
import React, { Component } from 'react'
import styled from 'styled-components';
import ReactStars from 'react-stars'

const Rating = ({rating}) => {
  const Container = styled.div`
  `;
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  return <Container>
    <ReactStars
      count={5}
      value={rating}
      onChange={ratingChanged}
      size={24}
      color2={'#ffd700'} />
  </Container>
}

export default Rating