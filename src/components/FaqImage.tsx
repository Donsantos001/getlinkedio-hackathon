import React from 'react';
import styled from 'styled-components';
import Faq from '../assets/faqs-image.svg';
import Ques from '../assets/faqs-ques-mark.svg';

const FaqImage = () => {
  return (
    <Container>
      <div className="faq">
        <img src={Faq} alt="" />
      </div>
      <div className="ques q1">
        <img src={Ques} alt="" />
      </div>
      <div className="ques q2">
        <img src={Ques} alt="" />
      </div>
      <div className="ques q3">
        <img src={Ques} alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
    position relative;

    .faq {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height 100%;
        object-fit: contain;
      }
    }

    .ques {
      position: absolute;

        img {
          width: 100%;
          height 100%;
          object-fit: contain;
        }
    }

    .q1 {
      width: 6%;
      left: 10%;
      top: -4%;
    }
    .q2 {
      width: 9%;
      left: 33%;
      top: -13%;
    }
    .q3 {
      width: 6%;
      left: 56%;
      top: -4%;
    }
`;

export default FaqImage;
