import GradButtonDark from 'components/GradButtonDark';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/getlinkedlogo.png';
import Menu from '../../assets/menu.svg';
import BrandLogo from 'components/BrandLogo';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} className="navbar-brand-item">
            <BrandLogo />
          </Link>
        </div>

        <div className="navbar-options">
        <div className="navbar-items">
            <a href={'/#timeline'} className="navbar-item">
              Timeline
            </a>
            <a href={'/#overview'} className="navbar-item">
              Overview
            </a>
            <a href={'/#faqs'} className="navbar-item">
              FAQs
            </a>
            <Link to={'/contact'} className="navbar-item" id='ct'>
              Contact
            </Link>
          </div>

          <div className="navbar-buttons">
            <Link to={'/register'} className="navbar-button">
              <GradButtonDark label="Register" />
            </Link>
          </div>
        </div>

        <div className="navbar-toggler">
          <div className="nti">
            <img src={Menu} alt="menu icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  z-index: 10;
  padding: 40px 20px 10px 20px;

  @media (max-width: 1200px) {
    padding: 10px 20px;
  }

  @media (max-width: 600px) {
    padding: 10px 20px 5px 20px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .navbar-brand {
    display: flex;
    align-items: center;

    .navbar-brand-item {
      padding-left: 60px;

      @media (max-width: 1200px) {
        padding-left: 20px;
      }
    }
  }

  .navbar-options {
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
      display: none;
    }

    .navbar-items {
      display: flex;
      align-items: center;

      .navbar-item {
        display: block;
        color: ${({ theme }) => theme.text};
        margin: 0 30px;

        @media (max-width: 1200px) {
          margin: 0 15px;
        }
      }

      #ct {
        background: linear-gradient(
          90deg,
          ${({ theme }) => theme.gradientEnd} 0%,
          ${({ theme }) => theme.gradientStart} 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }

    .navbar-buttons {
      margin: 0 80px;

      @media (max-width: 1200px) {
        margin: 0 20px 0 40px;
      }
    }
  }

  .navbar-toggler {
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
    .nti {
      width: 25px;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export default Navbar;
