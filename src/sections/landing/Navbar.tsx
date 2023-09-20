import GradButton from 'components/GradButton';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/getlinkedlogo.png';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} className="navbar-brand-item">
            <div>
              <img src={Logo} alt="getlinkedlogo" />
            </div>
          </Link>
        </div>

        <div className="navbar-options">
          <div className="navbar-items">
            <Link to={'/'} className="navbar-item">
              Timeline
            </Link>
            <Link to={'/'} className="navbar-item">
              Overview
            </Link>
            <Link to={'/'} className="navbar-item">
              FAQs
            </Link>
            <Link to={'/'} className="navbar-item">
              Contact
            </Link>
          </div>

          <div className="navbar-buttons">
            <Link to={'/register'} className="navbar-button">
              <GradButton label="Register" />
            </Link>
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

      & > div {
        height: 44px;
        object-fit: contain;
      }
    }
  }

  .navbar-options {
    display: flex;
    align-items: center;

    .navbar-items {
      display: flex;
      align-items: center;

      .navbar-item {
        display: block;
        color: ${({ theme }) => theme.text};
        margin: 0 30px;
      }
    }
  }
  .navbar-buttons {
    margin: 0 80px;
  }
`;

export default Navbar;
