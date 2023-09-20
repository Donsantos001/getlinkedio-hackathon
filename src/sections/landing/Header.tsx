import HeaderImage from 'components/HeaderImage';
import Arc from '../../assets/arc.svg';
import Explode from '../../assets/explode.svg';
import Chain from '../../assets/chain.svg';
import Bulb from '../../assets/bulb.svg';
import React from 'react';
import styled from 'styled-components';
import GradButton from 'components/GradButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <div className="header-theme">
        <h3>Igniting a Revolution in HR Innovation</h3>
        <img src={Arc} alt="" />
      </div>

      <div className="header-main">
        <div className="header-image">
          <HeaderImage />
        </div>

        <div className="header-content">
          <div className="header-title">
            <div className="hta">
              <div className="bulb">
                <img src={Bulb} alt="" />
              </div>
              <h2>getlinked Tech</h2>
            </div>
            <div className="htb">
              <h2>
                Hackathon <span>1.0</span>
              </h2>
              <div className="chain">
                <img src={Chain} alt="" />
              </div>
              <div className="explode">
                <img src={Explode} alt="" />
              </div>
            </div>
          </div>

          <div className="header-text">
            <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          </div>

          <div className="header-button">
            <Link to="/">
              <GradButton label="Register" />
            </Link>
          </div>

          <div className="header-timer">
            <p>
              00<span>H </span>00<span>M </span>00<span>S</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 9;
  padding-left: 30px;

  .header-theme {
    padding: 10px 70px 10px 10px;
    margin: 10px 0 30px 0;

    & > h3 {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
      color: ${({ theme }) => theme.text};
      width: fit-content;
      margin-left: auto;
    }

    & > img {
      display: block;
      margin: -12px 0 0 auto;
    }
  }

  .header-main {
    display: flex;
    position: relative;

    .header-content {
      padding: 80px 0 0 60px;

      .header-title {
        color: ${({ theme }) => theme.text};
        font-size: 54px;
        line-height: 1.2;
        margin-bottom: 40px;
        font-family: 'Clash Display';

        .hta {
          position: relative;

          .bulb {
            position: absolute;
            bottom: 58%;
            right: 138px;
          }
        }

        .htb {
          display: flex;
          align-items: center;

          h2 {
            margin: 0;
          }

          & > h2 > span {
            color: ${({ theme }) => theme.primary};
          }

          div > img {
            height: 100%;
            object-fit: contain;
          }

          .chain {
            height: 86px;
          }

          .explode {
            height: 54px;
          }
        }
      }

      .header-text {
        color: ${({ theme }) => theme.text};
        font-size: 22px;
        margin-bottom: 40px;
        margin-left: 10px;
        max-width: 580px;
      }

      .header-button {
        margin-left: 10px;
      }

      .header-timer {
        color: ${({ theme }) => theme.text};
        font-family: 'Unica One';
        padding: 60px 0;
        margin-left: 10px;

        p {
          font-size: 56px;
          span {
            font-size: 12px;
            margin-right: 35px;
          }
        }
      }
    }

    .header-image {
      position: absolute;
      width: 55%;
      right: 0;
      bottom: -40px;
    }
  }
`;

export default Header;
