import React from 'react';
import styled from 'styled-components';
import SponsorsImage from '../../assets/sponsors-image.svg';
import StarWhite from '../../assets/rules-star-white.svg';
import StarPurple from '../../assets/intro-star-medium.svg';

const Sponsors = () => {
  return (
    <Wrapper>
      <div className="sponsors">
        <div className="sponsors-head">
          <h2 className="sponsors-title" data-aos="fade-up">Partners and Sponsors</h2>
          <p className="sponsors-text" data-aos="fade-up">
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and
            sponsors
          </p>
        </div>

        <div className="sponsors-image">
          <div className="img-con">
            <img src={SponsorsImage} alt="" />
          </div>

          <div className="star-small" data-aos="zoom-in">
            <img src={StarPurple} alt="" />
          </div>

          <div className="star-medium" data-aos="zoom-in">
            <img src={StarPurple} alt="" />
          </div>

          <div className="star-light" data-aos="zoom-in">
            <img src={StarWhite} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  .sponsors-head {
    text-align: center;
    margin: 0 auto 50px auto;
    max-width: 520px;

    @media (max-width: 768px) {
      margin-bottom: 35px;
      padding: 0px 5px;
    }

    .sponsors-title {
      font-family: 'Clash Display';
    }

    .sponsors-text {
      font-size: 14px;
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }

  .sponsors-image {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }

    & > div > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .star-small {
      position: absolute;
      left: 9%;
      top: -20px;
      width: 16px;

      @media (max-width: 768px) {
        width: 11px;
        left: 9%;
        top: 0;
      }
    }

    .star-medium {
      position: absolute;
      right: 45%;
      top: 20%;
      width: 16px;

      @media (max-width: 768px) {
        width: 11px;
        right: 45%;
        top: 35%;
      }
    }
    .star-light {
      position: absolute;
      right: 45%;
      bottom: 15%;
      width: 18px;

      @media (max-width: 7680px) {
        right: 15%;
        bottom: 3%;
        width: 12px;
      }
    }
  }
`;

export default Sponsors;
