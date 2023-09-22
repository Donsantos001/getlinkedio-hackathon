import GradButton from 'components/GradButton';
import React from 'react';
import styled from 'styled-components';
import JudgeImage from '../../assets/judge-image.svg';

const Judge = () => {
  return (
    <Wrapper>
      <div className="judge">
        <div className="judge-image">
          <div className="star-small">{/* <img src={StarSmall} alt="" /> */}</div>
          <div className="arrow">{/* <img src={Arrow} alt="" /> */}</div>
          <div className="judge-image-con">
            <img src={JudgeImage} alt="" />
          </div>
        </div>

        <div className="judge-content">
          <div className="judge-title">
            <div className="judge-title-text">
              <h2 className="jtt1">Judging Criteria</h2>
              <h2 className="jtt2">Key attributes</h2>
            </div>
          </div>

          <div className="judge-text">
            <p>
              <span className="judge-key">Innovation and Creativity:</span>
              <span>
                Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative features.
              </span>
            </p>
            <p>
              <span className="judge-key">Functionality:</span>
              <span>
                Assess how well the solution works. Does it perform its intended functions effectively and
                without major issues? Judges would consider the completeness and robustness of the solution.
              </span>
            </p>
            <p>
              <span className="judge-key">Impact and Relevance:</span>
              <span>
                Determine the potential impact of the solution in the real world. Does it address a
                significant problem, and is it relevant to the target audience? Judges would assess the
                potential social, economic, or environmental benefits.{' '}
              </span>
            </p>
            <p>
              <span className="judge-key">Technical Complexity:</span>
              <span>
                Evaluate the technical sophistication of the solution. Judges would consider the complexity of
                the code, the use of advanced technologies or algorithms, and the scalability of the solution.{' '}
              </span>
            </p>
            <p>
              <span className="judge-key">Adherence to Hackathon Rules:</span>
              <span>
                Judges will Ensure that the team adhered to the rules and guidelines of the hackathon,
                including deadlines, use of specific technologies or APIs, and any other competition-specific
                requirements
              </span>
            </p>
          </div>

          <div className="judge-button">
            <GradButton label="Read More" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px 20px 80px 20px;

  @media (max-width: 900px) {
    padding: 20px 40px;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  .judge {
    padding: 30px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 900px) {
      flex-direction: column;
      padding: 10px 0;
      align-items: center;
    }

    .judge-image {
      position: relative;
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

      .judge-image-con {
        width: 100%;
        height: 100%;
        min-width: 410px;

        @media (max-width: 900px) {
          min-width: auto;
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

    .judge-content {
      max-width: 530px;
      color: ${({ theme }) => theme.text};

      @media (max-width: 900px){
        text-align: center;
      }

      .judge-title {
        position: relative;

        @media (max-width: 900px){
          padding-left: 15px;
        }

        .judge-title-text {
          font-family: 'Clash Display';
          font-size: 22px;
          margin-bottom: 20px;

          @media (max-width: 768px) {
            font-size: 16px;
          }

          & > h2 {
            line-height: 1.1;
          }

          .jtt2 {
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

      .judge-text {
        font-size: 14px;
        text-align: left;

        @media (max-width: 768px) {
          font-size: 13px;
        }
        @media (max-width: 600px) {
            text-align:center;
          }
        

        & > p {
            margin-bottom: 20px;

            .judge-key {
                font-weight: bold;
                color: ${({ theme }) => theme.tertiary};
            }
        }
      }

      .judge-button {
        padding-top: 15px;
      }
    }
  }
`;

export default Judge;
