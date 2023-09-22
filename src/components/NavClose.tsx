import React from 'react';
import styled from 'styled-components';
import Close from '../assets/nav-close.svg';
import { Link } from 'react-router-dom';

const NavClose = ({ action }: { action: () => void }) => {
  return (
    <Container>
      <div className="back" onClick={() => action()}>
        <div className="arrow-con">
          <div className="arrow">
            <img src={Close} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .back {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(
      0deg,
      ${({ theme }) => theme.gradientStart} 0%,
      ${({ theme }) => theme.gradientEnd} 100%
    );

    .arrow-con {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.background};

      .arrow {
        width: 50%;
        height: 50%;
      }
    }
  }
`;

export default NavClose;
