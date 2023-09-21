import React from 'react';
import styled from 'styled-components';
import StarPurple from '../../assets/rules-star-puple.svg';
import StarWhite from '../../assets/rules-star-white.svg';
import RulesImage from '../../assets/rules-image.svg';

const Rules = () => {
  return (
    <Wrapper>
      <div className="rules">
        <div className="rules-content">
          <div className="rules-title">
            <div className="ph"></div>
            <div className="rules-title-text">
              <h2 className="rtt1">Rules and</h2>
              <h2 className="rtt2">Guidelines</h2>
            </div>
            <div className="star-medium">
              <img src={StarWhite} alt="" />
            </div>
          </div>

          <div className="rules-text">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape
              the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving real-world problems, pushing the
              boundaries of technology, and creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>

        <div className="rules-image">
          <div className="star-small">
            <img src={StarPurple} alt="" />
          </div>

          <div className="ric">
            <img src={RulesImage} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 80px;

  @media (max-width: 900px) {
    padding: 20px 40px;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  .rules {
    padding: 30px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 10px 0;
    }

    .rules-image {
      position: relative;
      width: 490px;
      display: flex;
      flex-direction: column;
      margin-left: 6px;

      @media (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
        width: auto;
        padding: 5px;
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

    .rules-content {
      max-width: 530px;
      color: ${({ theme }) => theme.text};

      @media (max-width: 900px){
        text-align: center;
      }

      .rules-title {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 900px){
            padding-left: 15px;
          }

        .rules-title-text {
          font-family: 'Clash Display';
          font-size: 22px;
          margin-bottom: 20px;

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

      .rules-text {
        font-size: 14px;

        @media (max-width: 768px) {
            font-size: 13px;
          }
      }
    }
  }
`;

export default Rules;
