import styled from 'styled-components';

const GradButton = ({ label, action = () => null }: { label: string; action?: () => void }) => {
  return (
    <Container onClick={action}>
      <div>{label}</div>
    </Container>
  );
};

const Container = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(90deg, ${({ theme }) => theme.gradientStart} 0%, ${({ theme }) => theme.gradientEnd} 100%);
  border-radius: 4px;
  padding: 15px 50px;
  cursor: pointer;

  & > div {
    font-size: 16px;
    color: ${({ theme }) => theme.text};
  }
`;

export default GradButton;
