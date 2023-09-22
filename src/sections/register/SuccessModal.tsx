import GradButton from 'components/GradButton';
import Success from '../../assets/congrats.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    position: fixed;
    padding: 20px 30px;
    left:0;
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
        border 1px solid ${({ theme }) => theme.primary};
        border-radius: 4px;
        text-align: center;
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        jusify-content: center;
        transform: scale(0.2);
        transition: all .3s ease;
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

      
  }
`;

export default SuccessModal;
