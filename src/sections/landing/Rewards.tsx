import React from 'react';
import styled from 'styled-components';
import Trophy from '../../assets/rewards-trophy.svg';
import Medal from '../../assets/rewards-medal.svg';

const Rewards = () => {
  return (
    <Wrapper>
      <div className="rewards">
        <div className="rewards-title">
          <div className="rewards-title-text">
            <h2 className="rtt1">Prizes and</h2>
            <h2 className="rtt2">Rewards</h2>
          </div>
          <div className="rewards-text">
            <p>Highlight of the prizes or rewards for winners and for participants.</p>
          </div>
        </div>

        <div className="rewards-images">
          <div className="trophy-con">
            <img src={Trophy} alt="" />
          </div>
          <div className="medal-con">
            <img src={Medal} alt="" />
          </div>
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
      width: 60%;
      padding-top: 40px;
      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
`;

export default Rewards;
