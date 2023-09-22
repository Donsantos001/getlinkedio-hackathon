import React from 'react';
import styled from 'styled-components';
import Boy from '../assets/boy-running.svg';
import Girl from '../assets/girl-running.svg';

const Movement = () => {
  return (
    <Container>
      <div className="movement">
        <div className="girl">
          <img src={Girl} alt="" />
        </div>
        <div className="boy">
          <img src={Boy} alt="" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  img {
    width: 100%;
    height: 100%;
  }

  .movement {
    display: flex;
    justify-content: center;
    height: 30px;
    width: 100px;
    margin-bottom: 5px;
    border-bottom: 1px dashed ${({ theme }) => theme.primary};
  }
`;

export default Movement;
