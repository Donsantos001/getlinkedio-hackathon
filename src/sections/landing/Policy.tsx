import React from 'react';
import styled from 'styled-components';
import StarPurple from '../../assets/rules-star-puple.svg';
import StarWhite from '../../assets/rules-star-white.svg';
import Check from '../../assets/policy-checked.svg';
import GradButton from 'components/GradButton';
import PolicyImage from 'components/PolicyImage';

const Policy = () => {
  return (
    <Wrapper>
      <div className="policy">
        <div className="policy-content">
          <div className="policy-title">
            <div className="policy-title-text">
              <h2 className="ptt1">Privacy Policy and</h2>
              <h2 className="ptt2">Terms</h2>
            </div>
            <div className="star-medium">
              <img src={StarWhite} alt="" />
            </div>
          </div>

          <div className="policy-update">
            <p>Last updated on September 12, 2023</p>
          </div>

          <div className="policy-text">
            <p>
              Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of
              our participant
            </p>
          </div>

          <div className="policy-box-con">
            <div className="policy-box">
              <p className="overview">
                At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your
                personal information. This Privacy Policy outlines how we collect, use, disclose, and
                safeguard your data when you participate in our tech hackathon event. By participating in our
                event, you consent to the practices described in this policy.
              </p>

              <div className="license">
                <h3>Licensing Policy</h3>
                <h4>Here are terms of our Standard License:</h4>
              </div>

              <div className="policy-items">
                <div className="policy-item">
                  <div className="check">
                    <img src={Check} alt="" />
                  </div>
                  <div className="text">
                    <p>
                      The Standard License grants you a non-exclusive right to navigate and register for our
                      event
                    </p>
                  </div>
                </div>
                <div className="policy-item">
                  <div className="check">
                    <img src={Check} alt="" />
                  </div>
                  <div className="text">
                    <p>
                      You are licensed to use the item available at any free source sites, for your project
                      developement
                    </p>
                  </div>
                </div>
              </div>

              <div className="read-more">
                <GradButton label="Read More" />
              </div>
            </div>
          </div>
        </div>

        <div className="policy-image">
          <div className="star-small">
            <img src={StarPurple} alt="" />
          </div>

          <div className="ric">
            <PolicyImage />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 80px;

  @media (max-width: 900px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  .policy {
    padding: 30px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      flex-direction: column;
      padding: 10px 0;
    }

    .policy-image {
      position: relative;
      width: 490px;
      display: flex;
      flex-direction: column;
      margin-left: 80px;

      @media (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
        width: auto;
        max-width: 460px;
        padding: 5px;
        margin: 30px 0 0 0;
      }

      .ric {
        width: 100%;
        height: 100%;

        @media (min-width: 900px) {
          min-width: 300px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .star-small {
        position: absolute;
        right: calc(100% + 20px);
        top: 35%;
        width: 20px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @media (max-width: 900px){
          width: 15px;
          top: 30%;
          right: 90%;
        }
      }

      
    }

    .policy-content {
      max-width: 530px;
      color: ${({ theme }) => theme.text};

      @media (max-width: 900px){
        text-align: center;
      }

      .policy-title {
        position: relative;
        display: flex;
        justify-content: start;
        align-items: center;

        @media (max-width: 900px){
            padding-left: 15px;
            justify-content: center;
          }

        .policy-title-text {
          font-family: 'Clash Display';
          font-size: 22px;
          margin-bottom: 20px;

          @media (max-width: 768px) {
            font-size: 16px;
          }

          & > h2 {
            line-height: 1.1;
          }
          .ptt2 {
            color: ${({ theme }) => theme.primary};
          }
        }

        .star-medium {
          @media (max-width: 900px){
            position-absolute;
            width: 15px;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .ph {
            display: none;

            @media(max-width: 900px){
                display: block;
            }
        }
      }

      .policy-update, .policy-text {
        font-size: 14px;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 13px;
          }
      }

      .policy-box-con {
        background-color: rgba(217,217,217,0.03);
        border: 1px solid ${({ theme }) => theme.primary};
        border-radius: 4px;

        .policy-box {
            padding: 40px 30px 40px 40px;
            font-size: 14px;
    
            @media (max-width: 768px) {
                padding: 30px 15px 30px 15px;
                font-size: 13px;
              }
    
              .overview {
                margin-bottom: 20px;
              }

              .license {
                text-align: left;
                margin-bottom: 20px;

                & > h3 {
                    color: ${({ theme }) => theme.primary};
                    font-size: 16px;
    
                    @media (max-width: 768px) {
                        font-size: 14px;
                      } 
                }              
              }

              .policy-items {
                text-align: left;
                margin-bottom: 20px;

                  .policy-item {
                      display: flex;

                      .check {
                        padding-top: 5px;
                        display: flex;
                        align-items: flex-start;

                        img {
                            width: 14px;
                            height: 14px;
                            object-fit: contain;
                          }
                      }

                      .text{
                          padding-left: 10px
                      }
                  }
              }  

              .read-more {
                display: flex;
                justify-content: center;
                padding-bottom: 20px;
              }
          }
      }
    }
  }
`;

export default Policy;
