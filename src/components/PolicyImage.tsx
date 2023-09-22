import React from 'react';
import Policy from '../assets/policy-image.svg';
// import Lock from '../assets/policy-lock.svg';
import styled from 'styled-components';

const PolicyImage = () => {
  return (
    <Container>
      <div className="lock">
        <img src={Policy} alt="" />
      </div>
      {/* <div className="policy">
        <img src={Policy} alt="" />
      </div> */}
    </Container>
  );
};

const Container = styled.div`
    position relative;
    margin-bottom: 40%;

    .lock {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height 100%;
        object-fit: contain;
      }
    }

    // .policy {
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //     left: -5%;
    //     top: 28%;

    //     img {
    //       width: 100%;
    //       height 100%;
    //       object-fit: contain;
    //     }
    // }
`;

export default PolicyImage;
