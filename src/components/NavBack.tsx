import React from 'react';
import styled from 'styled-components';
import AngleBack from '../assets/angle-left.svg';
import { Link } from 'react-router-dom';

const NavBack = () => {
  return (
    <Container>
      <Link to="/">
        <div className="back">
          <div className="arrow-con">
            <div className="arrow">
              <img src={AngleBack} alt="" />
            </div>
          </div>
        </div>
      </Link>
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
        width: 7px;
      }
    }
  }
`;

export default NavBack;
