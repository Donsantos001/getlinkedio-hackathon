import React, { useState } from 'react';
import Navbar from 'sections/contact/Navbar';
import styled from 'styled-components';
import Socials from '../assets/footer-social.svg';
import GradButton from 'components/GradButton';
import NavBack from 'components/NavBack';
import { apiMutate } from 'utils/query';
import { useMutation } from 'react-query';

type FormDataType = {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    phone_number: '02132323455',
    first_name: '',
    message: '',
  });

  const handleChange = (e: any) => {
    console.log({ ...formData, [e.target.name]: e.target.value });
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const { isLoading, mutate: contact } = useMutation(
    (data: FormDataType) => {
      return apiMutate('hackathon/contact-form', data);
    },
    {
      onSuccess: (data: any) => {
        console.log(data);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    contact(formData);
  };

  return (
    <Wrapper>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="navbar-sm">
        <div className="nsm">
          <NavBack />
        </div>
      </div>

      <div className="contact">
        <div className="contact-inner">
          <div className="contact-main">
            <h3>Get in touch</h3>
            <div>
              <p>Contact</p>
              <p>Information</p>
            </div>

            <div>
              <p>27, Alara Street</p>
              <p>Yaba 100012</p>
              <p>Lagos State</p>
            </div>

            <div>
              <p>Call us: 07067981819</p>
            </div>

            <div>
              <p>we are open from Monday-Friday</p>
              <p>08:00am - 05:00pm</p>
            </div>

            <div className="share">
              <p>Share on</p>
              <div className="socials">
                <img src={Socials} alt="" />
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="" onSubmit={handleSubmit}>
              <div className="inner">
                <div className="form-head">
                  <h3>Questions or need assistance?</h3>
                  <h3>let us now about it!</h3>
                </div>

                <div className="form-sub-head">Email us below to any question related to our event</div>

                <div className="input-con ic-lg">
                  <input
                    value={formData.first_name}
                    onChange={handleChange}
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                  />
                </div>

                <div className="input-con ic-sm">
                  <input type="text" name="team_name" placeholder="Team's Name" />
                </div>
                <div className="input-con ic-sm">
                  <input type="text" name="topic" placeholder="Topic" />
                </div>

                <div className="input-con">
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Mail"
                  />
                </div>
                <div className="input-con">
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    cols={30}
                    rows={5}
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="submit-button">
                  <GradButton submit label={isLoading ? 'Submiting' : 'Submit'} />
                </div>

                <div className="share-sm">
                  <p>Share on</p>
                  <div className="socials">
                    <img src={Socials} alt="" />
                  </div>
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
      padding: 60px 40px 0 40px;
    }
  }
  .contact {
    padding: 80px 120px;

    @media (max-width: 1024px) {
      padding: 80px 60px;
    }
    @media (max-width: 900px) {
      padding: 0 40px;
    }

    .contact-inner {
      max-width: 1024px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      @media (max-width: 768px) {
        font-size: 13px;
      }

      .contact-main {
        width: fit-content;

        @media (max-width: 900px) {
          display: none;
        }

        & > h3 {
          padding-top: 30px;
          color: ${({ theme }) => theme.primary};
          font-family: 'Clash display';
          font-size: 26px;

          @media (max-width: 768px) {
            font-size: 20px;
          }
        }

        & > div {
          margin-top: 15px;
        }

        .share {
          & > p {
            color: ${({ theme }) => theme.primary};
          }
        }
      }

      .contact-form {
        width: 550px;
        padding: 60px 80px;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.03);

        @media (max-width: 900px) {
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          background-color: transparent;
          padding: 30px 0;
        }

        .inner {
          .form-head {
            color: ${({ theme }) => theme.primary};
          }

          .form-sub-head {
            margin-top: 30px;
            display: none;

            @media (max-width: 900px) {
              display: block;
            }
          }

          .input-con {
            width: 100%;
            margin-top: 30px;
            border-radius: 4px;
            overflow: hidden;
            border: 1px solid ${({ theme }) => theme.text};

            input,
            textarea {
              outline: none;
              border: none;
              width: 100%;
              height: 100%;
              color: ${({ theme }) => theme.text};
              background-color: rgba(255, 255, 255, 0.03);

              &::placeholder {
                color: ${({ theme }) => theme.text};
                font-size: inherit;
                font-family: 'Montserrat';
              }
            }

            input {
              height: 40px;
              padding: 6px 12px;
              font-size: inherit;
              font-family: 'Montserrat';
            }

            textarea {
              padding: 6px 10px;
              resize: none;
              font-size: inherit;
              font-family: 'Montserrat';
            }
          }

          .ic-sm {
            display: none;
            @media (max-width: 900px) {
              display: block;
            }
          }
          .ic-lg {
            display: block;
            @media (max-width: 900px) {
              display: none;
            }
          }

          .submit-button {
            width: fit-content;
            padding-top: 25px;
            margin: 0 auto;
          }

          .share-sm {
            margin-top: 30px;
            display: none;

            @media (max-width: 900px) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
        }
      }
    }
  }
`;

export default Contact;
