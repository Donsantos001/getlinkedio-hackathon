import React from 'react';
import styled from 'styled-components';
import Man from '../assets/header-image.png';
import World from '../assets/header-world.svg';

const HeaderImage = () => {
  return (
    <Container>
      <div className="man">
        <img src={Man} alt="" />
      </div>
      <div className="world">
        <img src={World} alt="" className="rotate" />
      </div>
    </Container>
  );
};

const Container = styled.div`
    position relative;

    .man {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height 100%;
        object-fit: contain;
      }
    }

    .world {
      position: absolute;
      width: 100%;
      height: 100%;
        left: 55%;
        top: -10px;
        transform: translateX(-50%);

        img {
          width: 90%;
          height 90%;
          object-fit: contain;
        }
    }
`;

export default HeaderImage;
