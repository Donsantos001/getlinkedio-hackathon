import GradButton from 'components/GradButton';
import Success from '../../assets/congrats.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import StarLight from '../../assets/rules-star-puple.svg';
import StarPurple from '../../assets/intro-star-medium.svg';

const SuccessModal = ({ close }: { close: () => void }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
    return () => setOpen(false);
  }, []);

  return (
    <Wrapper>
      <div className="success-modal">
        <div className={`success ${open ? ' success-open' : ''}`}>
          <div className="success-image">
            <img src={Success} alt="" />
          </div>

          <div className="success-title">
            <h2>Congratulations</h2>
            <h2>you have successfully Registered!</h2>
          </div>

          <div className="success-message">
            <p>Yes, it was easy and you did it!</p>
            <p>check your mail box for next step</p>
          </div>

          <div className="success-button">
            <GradButton
              full
              label="Back"
              action={() => {
                setOpen(false);
                setTimeout(() => close(), 200);
              }}
            />
          </div>
        </div>

        <div className="star-purple">
          <img src={StarPurple} alt="" />
        </div>

        <div className="star-purple-2">
          <img src={StarPurple} alt="" />
        </div>
        <div className="star-grey">
          <img src={StarLight} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  padding: 20px 30px;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  z-index: 15;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background}ED;

  .success-modal {
    position: relative;

    .success {
      border: 1px solid ${({ theme }) => theme.primary};
      border-radius: 4px;
      text-align: center;
      padding: 20px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: scale(0.2);
      transition: all 0.3s ease;
      overflow: hidden;

      @media (max-width: 768px) {
        padding: 20px 30px;
      }

      &.success-open {
        transform: scale(1);
      }

      .success-title {
        font-size: 12px;

        @media (max-width: 768px) {
          font-size: 9px;
        }
      }

      .success-message {
        font-size: 13px;

        @media (max-width: 768px) {
          font-size: 12px;
        }
      }

      .success-button {
        margin: 20px 0;
        width: 100%;
      }
    }

    .star-purple {
      position: absolute;
      width: 15px;
      right: -20px;
      top: -20px;

      @media (max-width: 900px) {
        width: 12px;
        top: -30px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .star-purple-2 {
      position: absolute;
      width: 15px;
      right: 20px;
      bottom: 5px;

      @media (max-width: 900px) {
        width: 12px;
        bottom: -25px;
        left: -5%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .star-grey {
      position: absolute;
      width: 15px;
      left: 16%;
      top: 40%;

      @media (max-width: 900px) {
        width: 12px;
        top: 45%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export default SuccessModal;
