import React from 'react';
import styled from 'styled-components';

const FaqItem = ({
  id,
  open,
  toggleShow,
  ques,
  ans,
}: {
  id: number;
  open: boolean;
  toggleShow: (id: number) => void;
  ques: string;
  ans: string;
}) => {
  return (
    <Container open={open}>
      <div className="faq-item">
        <div className="ques-con">
          <p className="ques">{ques}</p>
          <div className="plus" onClick={() => toggleShow(id)}>
            +
          </div>
        </div>
        <div className={`ans-con${open ? ' open' : ''}`}>
          <p className="ans">{ans}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ open: boolean }>`
  .faq-item {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    margin-bottom: 20px;
    padding-bottom: 10px;

    .ques-con {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .ques {
        font-weight: bold;
      }

      .plus {
        font-weight: 500;
        cursor: pointer;
        font-size: 1.5em;
        color: ${({ theme }) => theme.primary};
      }
    }

    .ans-con {
      transition: all 1s ease;
      overflow: hidden;
      max-height: 0px;
    }
    .open {
      max-height: 300px;
    }
  }
`;

export default FaqItem;
