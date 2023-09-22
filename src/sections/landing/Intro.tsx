import React from 'react';
import styled from 'styled-components';
import BigIdea from '../../assets/big-idea.svg';
import StarSmall from '../../assets/intro-star-small.svg';
import StarMedium from '../../assets/intro-star-medium.svg';
import Arrow from '../../assets/intro-arrow-curl.svg';

const Intro = () => {
  return (
    <Wrapper id="overview">
      <div className="intro">
        <div className="intro-image">
          <div className="star-small">
            <img src={StarSmall} alt="" />
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
          <div className="big-idea">
            <img src={BigIdea} alt="" />
          </div>
        </div>

        <div className="intro-content">
          <div className="intro-title">
            <div className="ph"></div>
            <div className="intro-title-text">
              <h2 className="itt1">Introduction to getlinked</h2>
              <h2 className="itt2">techHackathon 1.0</h2>
            </div>
            <div className="star-medium">
              <img src={StarMedium} alt="" />
            </div>
          </div>

          <div className="intro-text">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape
              the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving real-world problems, pushing the
              boundaries of technology, and creating solutions that can change the world, that's what we're
              all about!
            </p>
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
    padding: 10px 20px;
  }

  .intro {
    padding: 30px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 10px 0;
    }

    .intro-image {
      position: relative;
      width: 490px;
      margin-right: 6%;
      display: flex;
      flex-direction: column;

      @media (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 20px;
        margin-right: 0;
        width: auto;
        padding: 5px;
      }

      .big-idea {
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

      .arrow {
        position: absolute;
        left: calc(100% - 38px);
        bottom: 0;

        @media (max-width: 900px) {
          position: static;
        }
      }
    }

    .intro-content {
      max-width: 530px;
      color: ${({ theme }) => theme.text};

      @media (max-width: 900px){
        text-align: center;
      }

      .intro-title {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 900px){
          padding-left: 15px;
        }

        .intro-title-text {
          font-family: 'Clash Display';
          font-size: 22px;
          margin-bottom: 20px;

          @media (max-width: 768px) {
            font-size: 16px;
          }

          & > h2 {
            line-height: 1.1;
          }
          .itt2 {
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

      .intro-text {
        font-size: 14px;

        @media (max-width: 768px) {
          font-size: 13px;
        }
      }
    }
  }
`;

export default Intro;
