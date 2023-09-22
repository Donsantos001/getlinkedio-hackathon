import React, { useState } from 'react';
import Navbar from 'sections/register/Navbar';
import styled from 'styled-components';
import RegisterImage from '../assets/register-image.svg';
import Movement from 'components/Movement';
import GradButton from 'components/GradButton';
import SuccessModal from 'sections/register/SuccessModal';

const Register = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //after sumbit
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="navbar-sm">
        <div className="nsm">
          <h3>Register</h3>
        </div>
      </div>

      <div className="register">
        <div className="register-inner">
          <div className="register-image">
            <img src={RegisterImage} alt="" />
          </div>

          <div className="register-form">
            <form action="" onSubmit={handleSubmit}>
              <div className="register-form-inner">
                <h2 className="title">Register</h2>
                <div className="movement">
                  <p>Be part of this movement!</p>
                  <Movement />
                </div>
                <h2 className="create">CREATE YOUR ACCOUNT</h2>

                <div className="field-con mut">
                  <div className="field">
                    <label htmlFor="">Team's Name</label>
                    <div className="input-con">
                      <input type="text" placeholder="Enter the name of your group" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Phone</label>
                    <div className="input-con">
                      <input type="text" placeholder="Enter your phone number" />
                    </div>
                  </div>
                </div>

                <div className="field-con mut">
                  <div className="field">
                    <label htmlFor="">Email</label>
                    <div className="input-con">
                      <input type="text" placeholder="Enter your email address" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Project Topic</label>
                    <div className="input-con">
                      <input type="text" placeholder="What is your group project topic" />
                    </div>
                  </div>
                </div>

                <div className="field-con rem">
                  <div className="field">
                    <label htmlFor="">Category</label>
                    <div className="input-con">
                      <select name="category" id="cat">
                        <option value="">Select your category</option>
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Group Size</label>
                    <div className="input-con">
                      <select name="size" id="size">
                        <option value="">Select</option>
                        <option value="">Group Size 1</option>
                        <option value="">Group Size 2</option>
                      </select>
                    </div>
                  </div>
                </div>

                <p className="imp">
                  <i>Please review your registration details before submitting</i>
                </p>

                <div className="agree">
                  <input type="checkbox" name="agree" id="agree" />
                  <div className="txt">
                    <span>I agree with the event terms and conditions and privacy policy</span>
                  </div>
                </div>

                <div className="submit-button">
                  <GradButton full submit label="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalOpen && (
        <SuccessModal
          close={() => {
            setModalOpen(false);
          }}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  .navbar {
    @media (max-width: 900px) {
      display: none;
    }
  }

  .navbar-sm {
    display: none;

    @media (max-width: 900px) {
      display: block;
    }

    .nsm {
      padding: 40px 70px 0 70px;

      & > h3 {
        font-family: 'Clash Display';
        color: ${({ theme }) => theme.primary};
        font-size: 26px;

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }
    }
  }

  .register {
    padding: 30px 60px 40px 60px;

    @media (max-width: 1024px) {
      padding: 20px 30px 40px 30px;
    }
    @media (max-width: 600px) {
      padding: 20px 10px 40px 10px;
    }

    .register-inner {
      display: flex;

      @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
      }

      .register-image {
        width: 45%;
        @media (max-width: 900px) {
          width: 60%;
        }
      }

      .register-form {
        flex: 1;
        max-width: 700px;
        padding: 50px 80px;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.03);
        // position: relative;
        // left: -30px;

        // @media (max-width: 900px) {
        //   position: static;
        //   left: auto;
        // }

        @media (max-width: 475px) {
          padding: 20px 30px 30px 50px;
        }

        @media (max-width: 600px) {
          background-color: transparent;
          padding: 30px 0;
        }
        @media (max-width: 1024px) {
          padding: 30px 40px;
        }

        .register-form-inner {
          .title {
            margin-bottom: 20px;
            color: ${({ theme }) => theme.primary};
            font-family: 'Clash display';
            font-size: 26px;

            @media (max-width: 768px) {
              font-size: 20px;
            }
          }

          & > .movement {
            display: flex;
            align-items: flex-end;
            margin-bottom: 10px;

            p {
              margin-right: 10px;
            }
          }

          .create {
            padding-bottom: 10px;
            font-size: 26px;

            @media (max-width: 768px) {
              font-size: 20px;
            }
          }

          .field-con {
            margin-bottom: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;

            .field {
              .input-con {
                width: 100%;
                border-radius: 4px;
                overflow: hidden;
                border: 1px solid ${({ theme }) => theme.text};

                input,
                select {
                  outline: none;
                  border: none;
                  width: 100%;
                  height: 100%;
                  color: ${({ theme }) => theme.text};
                  background-color: rgba(255, 255, 255, 0.03);

                  &::placeholder {
                    font-size: inherit;
                    font-family: 'Montserrat';
                  }
                }

                input {
                  height: 40px;
                  padding: 6px 12px;
                  font-size: inherit;
                  font-family: 'Montserrat';

                  &::placeholder {
                    color: rgba(255, 255, 255, 0.25);
                  }
                }

                select {
                  height: 40px;
                  padding: 6px 12px;
                  resize: none;
                  font-size: inherit;
                  font-family: 'Montserrat';
                  &::placeholder {
                    color: ${({ theme }) => theme.text};
                  }
                }
              }
            }
          }
          .mut {
            @media (max-width: 768px) {
              grid-template-columns: 1fr;
            }
          }

          .rem {
            @media (max-width: 768px) {
              grid-template-columns: 6fr 4fr;
            }
          }

          .imp {
            color: ${({ theme }) => theme.gradientStart};
            margin-bottom: 10px;
          }

          .agree {
            margin-bottom: 20px;
            display: flex;
            align-items: flex-start;

            #agree {
              display: block;
              margin: 6px 10px 0 0;
            }
          }
        }
      }
    }
  }
`;

export default Register;
