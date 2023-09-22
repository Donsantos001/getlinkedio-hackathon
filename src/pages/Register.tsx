import React from 'react';
import Navbar from 'sections/landing/Navbar';
import styled from 'styled-components';
import RegisterImage from '../assets/register-image.svg';
import Movement from 'components/Movement';

const Register = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="navbar-sm">
        <Navbar />
      </div>

      <div className="register">
        <div className="register-inner">
          <div className="register-image">
            <img src={RegisterImage} alt="" />
          </div>

          <div className="register-form">
            <form action="">
              <div className="register-form-inner">
                <h2 className="title">Register</h2>
                <div className="movement">
                  <p>Be part of this movement!</p>
                  <Movement />
                </div>
                <h2 className="create">CREATE YOUR ACCOUNT</h2>

                <div className="field-con">
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

                <div className="field-con">
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
                  <p>I agree with the event terms and conditions and privacy policy</p>
                </div>

                <div className="submit-button">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
  }

  .register {
    padding: 30px 60px;
    .register-inner {
      display: flex;

      @media (max-width: 900px) {
        flex-direction: column;
      }

      .register-image {
        width: 45%;
        @media (max-width: 900px) {
          width: 100%;
        }
      }

      .register-form {
        flex: 1;
        max-width: 700px;
        padding: 50px 80px;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.03);

        @media (max-width: 600px) {
          background-color: transparent;
          padding: 30px 0;
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
              font-size: 14px;

              @media (max-width: 768px) {
                font-size: 13px;
              }
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
                  padding: 6px 10px;
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
        }
      }
    }
  }
`;

export default Register;
