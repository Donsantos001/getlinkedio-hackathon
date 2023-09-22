import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Socials from '../../assets/footer-social.svg';
import Call from '../../assets/social-call.svg';
import Location from '../../assets/social-location.svg';

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="overview">
          <div className="overview-content">
            <h3>
              get<span>linked</span>
            </h3>
            <p>
              Getlinked Tech Hackathon is a technology innovation program established by a group of
              organizations with the aim of showcasing young and talented individuals in the field of
              technology
            </p>
          </div>

          <div className="term-policy">
            <p>
              Terms of Use <span>|</span> Privacy Policy
            </p>
          </div>
        </div>

        <div className="navigation">
          <div className="navigation-inner">
            <div className="links">
              <h4>Useful Links</h4>
              <p>
                <Link to="#overview">Overview</Link>
              </p>
              <p>
                <Link to="#timeline">Timeline</Link>
              </p>
              <p>
                <Link to="#faqs">FAQs</Link>
              </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
              <div className="follow">
                <p>Follow us</p>
                <div className="socials">
                  <img src={Socials} alt="" />
                </div>
              </div>
            </div>

            <div className="contacts">
              <h4>Contact Us</h4>

              <div className="contact">
                <div className="icon ic">
                  <img src={Call} alt="" />
                </div>
                <div className="data">+234 679 810011</div>
              </div>

              <div className="contact">
                <div className="icon il">
                  <img src={Location} alt="" />
                </div>
                <div className="data">27,Alara Street Yaba 100012 Lagos State</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reserved">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 110px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.backgroundDark};

  @media (max-width: 1024px) {
    padding: 40px 80px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 40px 30px;
  }

  .footer {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 15px;

    @media (max-width: 900px) {
      flex-direction: column;
    }

    .overview {
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .overview-content {
        max-width: 470px;

        & > h3 {
          font-family: 'Clash display';
          font-size: 26px;

          @media (max-width: 768px) {
            font-size: 20px;
          }

          & > span {
            color: ${({ theme }) => theme.primary};
          }
        }
      }
      .term-policy {
        padding-top: 60px;

        @media (max-width: 900px) {
          padding-top: 40px;
        }

        & > p {
          span {
            font-weight: bold;
            color: ${({ theme }) => theme.primary};
            padding: 0 10px;
          }
        }
      }
    }

    .navigation {
      flex: 1;

      .navigation-inner {
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
          flex-direction: column;
        }

        .links,
        .contacts {
            padding-top: 20px;

          h4 {
            color: ${({ theme }) => theme.primary};
            font-size: 14px;
            margin-bottom: 14px;

            @media (max-width: 768px) {
              font-size: 13px;
            }
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .links {
          & > p {
            margin: 4px 0 6px 0;

            a {
              color: ${({ theme }) => theme.text};
            }
          }

          .follow {
            display: flex;
            align-items: center;

            & > p {
              color: ${({ theme }) => theme.primary};
            }

            .socials {
              padding-left: 10px;
              display: flex;
              align-items: center;
            }
          }
        }

        .contacts {
          max-width: 150px;

          @media (max-width: 900px) {
            font-size: margin-top: 20px;
          }

          .contact {
            margin: 4px 0 6px 0;
            display: flex;

            .ic {
              width: 10px;
              height: 10px;
            }
            .il {
              width: 20px;
              height: 20px;
            }

            .data {
              padding-left: 8px;
            }
          }
        }
      }
    }
  }

  .reserved {
    width: fit-content;
    margin: 50px auto 0 auto;
  }
`;

export default Footer;
