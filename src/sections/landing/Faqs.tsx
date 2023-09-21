import React, { useState } from 'react';
import styled from 'styled-components';
import { faqs } from 'data/landing';
import StarWhite from '../../assets/rules-star-white.svg';
import StarPurple from '../../assets/rules-star-puple.svg';
import FaqImage from 'components/FaqImage';
import FaqItem from 'components/FaqItem';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggleShow = (id: number) => {
    setOpenIndex(openIndex === id ? -1 : id);
  };

  return (
    <Wrapper>
      <div className="faqs">
        <div className="faqs-content">
          <div className="faqs-title">
            <div className="ph"></div>
            <div className="faqs-title-text">
              <h2 className="ftt1">Frequently Asked</h2>
              <h2 className="ftt2">Question</h2>
            </div>
            <div className="star-medium">
              <img src={StarWhite} alt="" />
            </div>
          </div>

          <div className="faqs-text">
            <p>
              We got answers to the questions that you might want to ask about{' '}
              <span>getlinked Hackathon 1.0</span>
            </p>
          </div>

          <div className="faqs-main">
            {faqs.map((item, index) => (
              <FaqItem key={index} open={openIndex === index} id={index} toggleShow={toggleShow} {...item} />
            ))}
          </div>
        </div>

        <div className="faqs-image">
          <div className="star-small">
            <img src={StarPurple} alt="" />
          </div>

          <div className="ric">
            <FaqImage />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
padding: 60px 20px 30px 40px;

@media (max-width: 900px) {
  padding: 20px 40px;
}
@media (max-width: 768px) {
  padding: 10px 20px;
}

.faqs {
  padding: 30px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 0 10px 0;
  align-items: center;
  }

  .faqs-image {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 6px;
    max-width: 700px;

    @media (max-width: 900px) {
      flex-direction: column-reverse;
      align-items: center;
      width: auto;
      padding: 5px;
      max-width: 580px;
      padding-top: 70px;
    }

    .ric {
      width: 100%;
      height: 100%;

      @media (min-width: 900px) {
        min-width: 300px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .star-small {
      position: absolute;
      right: calc(100% + 20px);
      top: 35%;
      width: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media (max-width: 900px){
        width: 15px;
        top: 30%;
        right: 90%;
      }
    }

    
  }

  .faqs-content {
    max-width: 530px;
    color: ${({ theme }) => theme.text};

    @media (max-width: 900px){
      text-align: center;
    }

    .faqs-title {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 900px){
          padding-left: 15px;
        }

      .faqs-title-text {
        font-family: 'Clash Display';
        font-size: 22px;
        margin-bottom: 20px;

        @media (max-width: 768px) {
          font-size: 16px;
        }

        & > h2 {
          line-height: 1.1;
        }
        .ftt1 {
          color: ${({ theme }) => theme.primary};
        }
      }

      .star-medium {
        @media (max-width: 900px){
          position-absolute;
          width: 15px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .ph {
          display: none;

          @media(max-width: 900px){
              display: block;
          }
      }
    }

    .faqs-text {
      font-size: 14px;

      @media (max-width: 768px) {
          font-size: 13px;
        }

        & > p > span {
            font-weight: bold;
        }
    }

    .faqs-main {
        margin-top: 40px;
        font-size: 14px;

      @media (max-width: 768px) {
          font-size: 13px;
        }
    }
  }
}
`;

export default Faqs;
