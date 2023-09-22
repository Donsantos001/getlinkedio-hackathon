import React from 'react';
import Judge from '../assets/judge-image.svg';
import Bubble from '../assets/judge-ellipse.svg';
import Lens from '../assets/rules-pp-left.svg';
import styled from 'styled-components';

const PolicyImage = () => {
  return (
    <Container>
      <div className="judge-img">
        <img src={Judge} alt="" />
      </div>
      <div className="bubble">
        <img src={Bubble} alt="" />
      </div>
      <div className="lens">
        <img src={Lens} alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
    position: relative;

    .judge-img {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height 100%;
        object-fit: contain;
      }
    }

    .bubble {
      position: absolute;
      width: 19%;
        left: 13%;
        top: -6%;

        @media (max-width: 768px){
          display: none;
        }

        img {
          width: 100%;
          height 100%;
          object-fit: contain;
        }
    }
    .lens {
      position: absolute;
      width: 100%;
      height: 100%;
        left: -15%;
        top: 28%;

        @media (max-width: 768px){
          
      width: 110%;
      height: 110%;
        left: -25%;
        }

        img {
          width: 100%;
          height 100%;
          object-fit: contain;
        }
    }
`;

export default PolicyImage;
