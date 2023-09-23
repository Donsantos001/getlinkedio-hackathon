import TimelineItem from 'components/TimelineItem';
import { timeline } from 'data/landing';
import React from 'react';
import styled from 'styled-components';
import StarWhite from '../../assets/rules-star-white.svg';
import StarPurple from '../../assets/intro-star-medium.svg';
import StarLight from '../../assets/rules-star-puple.svg';

const Timeline = () => {
  return (
    <Wrapper id="timeline">
      <div className="timeline">
        <div className="timeline-head">
          <h2 className="timeline-title">Timeline</h2>
          <p className="timeline-text">
            Here is the breakdown of the time we anticipate using for the upcoming event.
          </p>
        </div>

        <div className="timeline-main">
          <div className="timeline-content">
            {timeline.map((item, index) => (
              <TimelineItem key={index} id={index + 1} invert={index % 2 !== 0} {...item} />
            ))}
          </div>

          <div className="star-small" data-aos="zoom-in">
            <img src={StarPurple} alt="" />
          </div>

          <div className="star-medium" data-aos="zoom-in">
            <img src={StarWhite} alt="" />
          </div>

          <div className="star-light" data-aos="zoom-in">
            <img src={StarLight} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 60px 60px;

  @media (max-width: 768px) {
    padding: 50px 10px;
  }

  .timeline {
    max-width: 1120px;
    margin: 0 auto;
  }

  .timeline-head {
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 35px;
    }

    .timeline-title {
      font-family: 'Clash Display';
    }

    .timeline-text {
      max-width: 380px;
      margin: 0 auto;
      font-size: 14px;
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }

  .timeline-main {
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
      width: 18px;

      @media (max-width: 900px) {
        width: 15px;
        left: 20%;
        top: -20px;
      }
    }

    .star-medium {
      position: absolute;
      right: 20%;
      top: 45%;
      width: 18px;

      @media (max-width: 900px) {
        width: 15px;
        right: 20%;
        top: 45%;
      }
    }
    .star-light {
      position: absolute;
      left: 8%;
      bottom: 20px;
      width: 16px;

      @media (max-width: 900px) {
        width: 12px;
        left: -5px;
        bottom: -6px;
      }
    }
  }
`;

export default Timeline;
