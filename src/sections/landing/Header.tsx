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
        <div className="header-theme-text">
          <h3>Igniting a Revolution in</h3>
          <div className="httc">
            <h3>HR Innovation </h3>
            <div className="ht-image">
              <img src={Arc} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-image">
          <HeaderImage />
        </div>

        <div className="header-content">
          <div className="header-title">
            <div className="hta">
              <div className="htai">
                <h2>getlinked </h2>
                <div className="htaii">
                  <h2>Tech</h2>
                  <div className="bulb">
                    <img src={Bulb} alt="" />
                  </div>
                </div>
              </div>
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
              00<span>H </span>00<span>M </span>00<span id="ss">S</span>
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

  @media (max-width: 1024px) {
    padding-left: 15px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  .header-theme {
    padding: 10px 70px 10px 10px;
    margin: 10px 0 30px 0;

    @media (max-width: 768px) {
      padding: 0;
      margin: 10px 0 15px 0;
    }

    .header-theme-text {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
      color: ${({ theme }) => theme.text};
      width: fit-content;
      text-align: right;
      margin-left: auto;
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 1024px) {
        font-size: 28px;
      }

      @media (max-width: 900px) {
        font-size: 22px;
      }
      @media (max-width: 600px) {
        font-size: 16px;
        margin-right: auto;
        justify-content: center;
      }

      & > h3 {
        padding-right: 6px;
      }

      .httc {
        position: relative;

        .ht-image {
          position: absolute;
          top: calc(100% - 12px);
          width: 100%;
          display: flex;

          @media (max-width: 600px) {
            top: calc(100% - 8px);
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }

    & > img {
      display: block;
      margin: -12px 0 0 auto;
      @media (max-width: 600px) {
        font-size: 18px;
      }
    }
  }

  .header-main {
    display: flex;
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    .header-content {
      padding: 80px 0 0 60px;

      @media (max-width: 1024px) {
        padding: 40px 0 0 60px;
      }

      @media (max-width: 900px) {
        padding: 40px 0 0 40px;
      }
      @media (max-width: 768px) {
        padding: 40px 0 0 0;
        text-align: center;
        margin: 0 auto;
      }

      .header-title {
        color: ${({ theme }) => theme.text};
        font-size: 54px;
        line-height: 1.2;
        margin-bottom: 40px;
        font-family: 'Clash Display';

        @media (max-width: 1024px) {
          font-size: 40px;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          font-size: 20px;
          margin-bottom: 20px;
          line-height: 1;
        }

        .hta {
          position: relative;

          .htai {
            display: flex;

            @media (max-width: 768px) {
              justify-content: center;
            }

            & > h2 {
              padding-right: 6px;
            }

            .htaii {
              position: relative;

              .bulb {
                position: absolute;
                bottom: 58%;
                right: 26px;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }

                @media (max-width: 1024px) {
                  right: 20px;
                  width: 44px;
                }

                @media (max-width: 768px) {
                  bottom: 64%;
                  right: 10px;
                  width: 20px;
                }
              }
            }
          }
        }

        .htb {
          display: flex;
          align-items: center;

          @media (max-width: 768px) {
            justify-content: center;
          }

          h2 {
            margin: 0;
            width: max-content;
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
            @media (max-width: 768px) {
              height: 48px;
            }
          }

          .explode {
            height: 54px;
            @media (max-width: 768px) {
              height: 28px;
            }
          }
        }
      }

      .header-text {
        color: ${({ theme }) => theme.text};
        font-size: 22px;
        margin-bottom: 40px;
        margin-left: 10px;
        max-width: 580px;

        @media (max-width: 1024px) {
          font-size: 20px;
          margin-bottom: 30px;
          max-width: 500px;
        }
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }

      .header-button {
        margin-left: 10px;

        @media (max-width: 768px) {
          margin-left: 0;
        }
      }

      .header-timer {
        color: ${({ theme }) => theme.text};
        font-family: 'Unica One';
        padding: 60px 0;
        margin-left: 10px;

        @media (max-width: 1024px) {
          padding: 40px 0;
        }

        @media (max-width: 768px) {
          padding: 15px 0;
          margin-left: 0;
        }

        p {
          font-size: 56px;

          @media (max-width: 768px) {
            text-align: center;
            font-size: 48px;
          }

          span {
            font-size: 14px;
            margin-right: 35px;
          }

          #ss {
            margin-right: 0;
          }
        }
      }
    }

    .header-image {
      position: absolute;
      width: 55%;
      right: 0;
      bottom: -40px;

      @media (max-width: 768px) {
        position: relative;
        bottom: -9px;
        width: 100%;
      }
    }
  }
`;

export default Header;
