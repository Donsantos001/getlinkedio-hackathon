import React from 'react';
import styled from 'styled-components';

const BrandLogo = () => {
  return (
    <Container>
      <h2>
        get<span>linked</span>
      </h2>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    color: white;
    font-family: 'Clash Display';
    font-size: 30px;

    @media (max-width: 600px) {
      font-size: 22px;
    }

    & > span {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default BrandLogo;
