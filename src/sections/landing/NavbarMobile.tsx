import GradButton from 'components/GradButton';
import NavClose from 'components/NavClose';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarMobile = ({ open, close }: { open: boolean; close: () => void }) => {
  return (
    <Container className={`${open ? 'open' : ''}`}>
      <div className="nav-mobile">
        <div className="close-btn">
          <NavClose action={close} />
        </div>

        <div className="navbar-mobile-items">
          <a href={'#timeline'} className="navbar-mobile-item">
            Timeline
          </a>
          <a href={'#overview'} className="navbar-mobile-item">
            Overview
          </a>
          <a href={'#faqs'} className="navbar-mobile-item">
            FAQs
          </a>
          <Link to={'/contact'} className="navbar-mobile-item">
            Contact
          </Link>
        </div>

        <div className="navbar-mobile-btn">
          <Link to={'/register'} className="navbar-mobile-register">
            <GradButton label="Register" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  transition: all 0.5s ease;
  transform: translateX(101%);

  &.open {
    transform: translateX(0%);
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  .nav-mobile {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.background};
    padding: 30px 60px 120px 60px;
    box-shadow: 0px 1px 2px 2px rgba(217, 217, 217, 0.03);

    .close-btn {
      width: fit-content;
      margin-left: auto;
    }

    .navbar-mobile-items {
      padding-top: 60px;

      & > a {
        font-family: Inter;
        font-weight: bold;
        color: ${({ theme }) => theme.text};
        font-size: 18px;
        display: block;
        margin-bottom: 20px;
      }
    }

    .navbar-mobile-btn {
    }
  }
`;

export default NavbarMobile;
