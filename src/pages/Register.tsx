import React, { useState } from 'react';
import Navbar from 'sections/register/Navbar';
import styled from 'styled-components';
import RegisterImage from '../assets/register-image.svg';
import RulesLeft from '../assets/rules-pp-left.svg';
import RulesRight from '../assets/rules-pp-left.svg';
import Movement from 'components/Movement';
import GradButton from 'components/GradButton';
import SuccessModal from 'sections/register/SuccessModal';
import { useMutation, useQuery } from 'react-query';
import { apiMutate } from 'utils/query';

type FormDataType = {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number | string;
  project_topic: string;
  category: number | string;
  privacy_poclicy_accepted: boolean;
};

const Register = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    phone_number: '',
    team_name: '',
    group_size: 0,
    project_topic: '',
    category: 0,
    privacy_poclicy_accepted: false,
  });

  const { data } = useQuery<{ id: number; name: string }[]>('hackathon/categories-list');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const { isLoading, mutate: register } = useMutation(
    (data: FormDataType) => {
      return apiMutate('hackathon/registration', data);
    },
    {
      onSuccess: (data: any) => {
        console.log(data);
        setModalOpen(true);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({
      ...formData,
      category: formData.category as number,
      group_size: formData.group_size as number,
    });
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
                      <input
                        value={formData.team_name}
                        onChange={handleChange}
                        name="team_name"
                        type="text"
                        placeholder="Enter the name of your group"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Phone</label>
                    <div className="input-con">
                      <input
                        value={formData.phone_number}
                        onChange={handleChange}
                        name="phone_number"
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="field-con mut">
                  <div className="field">
                    <label htmlFor="">Email</label>
                    <div className="input-con">
                      <input
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Project Topic</label>
                    <div className="input-con">
                      <input
                        value={formData.project_topic}
                        onChange={handleChange}
                        name="project_topic"
                        type="text"
                        placeholder="What is your group project topic"
                      />
                    </div>
                  </div>
                </div>

                <div className="field-con rem">
                  <div className="field">
                    <label htmlFor="">Category</label>
                    <div className="input-con">
                      <select value={formData.category} onChange={handleChange} name="category" id="cat">
                        <option value="0">Select your category</option>
                        {data?.map((item, index) => (
                          <option key={index} value={`${item.id}`}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Group Size</label>
                    <div className="input-con">
                      <select value={formData.group_size} onChange={handleChange} name="group_size" id="size">
                        <option value="0">Select</option>
                        <option value="1"> 1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>

                <p className="imp">
                  <i>Please review your registration details before submitting</i>
                </p>

                <div className="agree">
                  <input
                    checked={formData.privacy_poclicy_accepted}
                    onChange={handleChange}
                    type="checkbox"
                    name="privacy_poclicy_accepted"
                    id="agree"
                  />
                  <div className="txt">
                    <span>I agree with the event terms and conditions and privacy policy</span>
                  </div>
                </div>

                <div className="submit-button">
                  <GradButton full submit label={isLoading ? 'Submiting' : 'Submit'} />
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
      <div className="lighting-left">
        <img src={RulesLeft} alt="" />
      </div>
      <div className="lighting-right">
        <img src={RulesRight} alt="" />
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

                  option {
                    color: ${({ theme }) => theme.text};
                    background-color: ${({ theme }) => theme.background};
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

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .lighting-left {
    width: 70%;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-30%, -10%);
    opacity: 0.68;

    @media (max-width: 768px) {
      width: 90%;
      transform: translate(-30%, 5%);
    }
  }
  .lighting-right {
    width: 70%;
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translate(50%, 40%);
    opacity: 0.68;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export default Register;
