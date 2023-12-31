import styled from 'styled-components';

const GradButton = ({
  label,
  action = () => null,
  full,
  submit,
}: {
  label: string;
  action?: () => void;
  full?: boolean;
  submit?: boolean;
}) => {
  return (
    <Container full={full} onClick={action} type={submit ? 'submit' : 'button'}>
      <div>{label}</div>
    </Container>
  );
};

const Container = styled.button<{ full?: boolean }>`
  outline: none;
  border: none;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.gradientStart} 0%,
    ${({ theme }) => theme.gradientEnd} 100%
  );
  border-radius: 4px;
  padding: 15px 50px;
  cursor: pointer;
  width: ${({ full }) => (full ? '100%' : 'auto')};

  & > div {
    font-size: 16px;
    color: ${({ theme }) => theme.text};
  }
`;

export default GradButton;
