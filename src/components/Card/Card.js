import React, { Component } from 'react';
import styled from 'styled-components';
import Sunny from '../../assets/img/sunny.jpg';
import TopImg from '../../assets/img/top2.jpg'

const Container = styled.div`
  margin: 5% 18%;
  width: 65%;
  height:500px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;

  
`;

const BackImg = styled.div`
  filter: blur(5px);
  background-image: url(${TopImg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const Top = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

`;


export class Card extends Component {
  render() {
    return (
      <>
      <Container>
        <BackImg></BackImg>
      </Container>
        <Top>Sydney</Top>
      </>
    )
  }
}

export default Card
