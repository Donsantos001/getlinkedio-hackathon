import TimelineItem from 'components/TimelineItem';
import { timeline } from 'data/landing';
import React from 'react';
import styled from 'styled-components';

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
`;

export default Timeline;
