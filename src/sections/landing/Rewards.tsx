import React from 'react';
import styled from 'styled-components';
import Trophy from '../../assets/rewards-trophy.svg';
import Medal from '../../assets/rewards-medal.svg';
import StarWhite from '../../assets/rules-star-white.svg';
import StarPurple from '../../assets/intro-star-medium.svg';
import StarLight from '../../assets/rules-star-puple.svg';

const Rewards = () => {
  return (
    <Wrapper>
      <div className="rewards">
        <div className="rewards-title">
          <div className="rewards-title-text" data-aos="fade-left">
            <h2 className="rtt1">Prizes and</h2>
            <h2 className="rtt2">Rewards</h2>
          </div>
          <div className="rewards-text" data-aos="fade-left">
            <p>Highlight of the prizes or rewards for winners and for participants.</p>
          </div>
        </div>

        <div className="rewards-images">
          <div className="trophy-con" data-aos="zoom-in">
            <img src={Trophy} alt="" />
          </div>
          <div className="medal-con">
            <img src={Medal} alt="" />

            <div className="star-white" data-aos="zoom-in">
              <img src={StarWhite} alt="" />
            </div>

            <div className="star-white-2" data-aos="zoom-in">
              <img src={StarWhite} alt="" />
            </div>
            <div className="star-grey" data-aos="zoom-in">
              <img src={StarLight} alt="" />
            </div>
          </div>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 60px 50px 70px 50px;
  background-color: ${({ theme }) => theme.backgroundDark}ED;

  @media (max-width: 768px) {
    padding: 60px 20px 70px 20px;
  }

  .rewards {
    position: relative;

    & > div > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .star-small {
      position: absolute;
      left: 20%;
      top: 0;
      width: 16px;

      @media (max-width: 768px) {
        width: 12px;
        left: 20%;
        top: -20px;
      }
    }

    .star-medium {
      position: absolute;
      right: 20%;
      top: 15%;
      width: 16px;

      @media (max-width: 768px) {
        width: 12px;
        right: 20%;
        top: 20px;
      }
    }
    .star-light {
      position: absolute;
      left: 15%;
      bottom: 7%;
      width: 14px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .rewards-title {
    padding-left: 55%;

    @media (max-width: 768px) {
      padding-left: 0;
      text-align: center;
    }

    .rewards-title-text {
      font-family: 'Clash Display';
      font-size: 22px;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 16px;
      }

      & > h2 {
        line-height: 1.1;
      }

      .rtt2 {
        color: ${({ theme }) => theme.primary};
      }
    }

    .rewards-text {
      font-size: 14px;

      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }

  .rewards-images {
    display: flex;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .trophy-con {
      position: relative;
      top: -40px;
      width: 40%;
      padding-top: 0px;

      @media (max-width: 600px) {
        position: static;
        top: auto;
        padding-top: 40px;
        width: 100%;
      }
    }

    .medal-con {
      position: relative;
      width: 60%;
      padding-top: 40px;
      @media (max-width: 600px) {
        width: 100%;
      }
      & > div > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .star-white {
        position: absolute;
        left: 10%;
        top: 20px;
        width: 18px;

        @media (max-width: 768px) {
          width: 13px;
          left: 10%;
          top: -20px;
        }
      }

      .star-white-2 {
        position: absolute;
        right: -10px;
        top: 28%;
        width: 18px;

        @media (max-width: 768px) {
          width: 13px;
          right: 15px;
          top: 22%;
        }
      }
      .star-grey {
        position: absolute;
        right: 30%;
        bottom: -20px;
        width: 17px;

        @media (max-width: 768px) {
          width: 12px;
          right: 30%;
          bottom: -30px;
        }
      }
    }
  }
`;

export default Rewards;
