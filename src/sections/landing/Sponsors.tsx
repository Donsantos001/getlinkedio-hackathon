import React from 'react';
import styled from 'styled-components';
import SponsorsImage from '../../assets/sponsors-image.svg';

const Sponsors = () => {
  return (
    <Wrapper>
      <div className="sponsors">
        <div className="sponsors-head">
          <h2 className="sponsors-title">Partners and Sponsors</h2>
          <p className="sponsors-text">
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and
            sponsors
          </p>
        </div>

        <div className="sponsors-image">
          <div className="img-con">
            <img src={SponsorsImage} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  .sponsors-head {
    text-align: center;
    margin: 0 auto 50px auto;
    max-width: 520px;

    @media (max-width: 768px) {
      margin-bottom: 35px;
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
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }

    .img-con {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export default Sponsors;
