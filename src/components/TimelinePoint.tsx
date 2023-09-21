import React from 'react';
import styled from 'styled-components';

const TimelinePoint = ({ number }: { number: number }) => {
  return (
    <Container>
      <div className="tp">
        <div className="line"></div>
        <div className="c-con">
          <div className="circle">
            <div className="number">{number}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  .tp {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .line {
      flex: 1;
      width: 2px;
      background-color: ${({ theme }) => theme.primary};
      margin-bottom: 5px;
    }

    .c-con {
      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: linear-gradient(
          90deg,
          ${({ theme }) => theme.secondary} 0%,
          ${({ theme }) => theme.primary} 100%
        );

        .number {
          font-weight: bold;
        }
      }
    }
  }
`;

export default TimelinePoint;
