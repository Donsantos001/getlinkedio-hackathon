import React from 'react';
import styled from 'styled-components';
import TimelinePoint from './TimelinePoint';

const TimelineItem = ({
  invert,
  title,
  text,
  date,
  id,
}: {
  invert?: boolean;
  title: string;
  text: string;
  date: string;
  id: number;
}) => {
  return (
    <Container invert={invert} first={id === 1}>
      <div className="tl">
        <div className="tl-main">
          <div className="flow">
            <TimelinePoint number={id} />
          </div>

          <div className="tl-content">
            <div className="tl-content-inner">
              <div className="tl-detail">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              <div className="tl-date">
                <h3>{date}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ invert?: boolean; first: boolean }>`
  .tl {
    padding: 2px 10px;

    @media (max-width: 800px) {
      padding: 15px 10px;
    }

    .tl-main {
      position: relative;
      margin: ${({ invert }) => (invert ? '0' : '0 0 0 auto')};
      width: calc(50% + 18px);
      display: flex;
      flex-direction: ${({ invert }) => (invert ? 'row-reverse' : 'row')};

      @media (max-width: 900px) {
        width: 100%;
        margin: 0;
        flex-direction: row;
      }

      .flow {
        min-height: ${({ first }) => (first ? '130px' : '100px')};
        @media (max-width: 900px) {
          min-height: auto;
        }
      }
    }

    h3 {
      color: ${({ theme }) => theme.primary};
    }

    .tl-content {
      display: flex;
      flex-direction: column;
      justify-content: end;

      .tl-content-inner {
        padding: 0 50px;

        @media (max-width: 900px) {
          padding: 0 20px;
        }

        .tl-detail {
          position: absolute;
          right: ${({ invert }) => (invert ? 'auto' : 'calc(100% + 43px)')};
          left: ${({ invert }) => (invert ? 'calc(100% + 43px)' : 'auto')};
          width: calc(100% - 78px);
          text-align: ${({ invert }) => (invert ? 'left' : 'right')};
          transform: translateY(-50%);

          @media (max-width: 900px) {
            position: static;
            text-align: left;
            transform: none;
            width: 100%;
          }

          & > h3 {
            @media (max-width: 600px) {
              font-size: 16px;
            }
          }

          & > p {
            font-size: 14px;
          }
        }

        .tl-date {
          @media (max-width: 600px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export default TimelineItem;
