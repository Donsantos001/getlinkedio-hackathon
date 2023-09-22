import styled from 'styled-components';

const GradButtonDark = ({
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
      <div className="bt-inner">
        <div>{label}</div>
      </div>
    </Container>
  );
};

const Container = styled.button<{ full?: boolean }>`
  outline: none;
  border: none;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.gradientStart},
    ${({ theme }) => theme.gradientEnd}
  );
  border-radius: 4px;
  cursor: pointer;
  padding: 2px;
  width: ${({ full }) => (full ? '100%' : 'auto')};

  .bt-inner {
    border-radius: 4px;
    padding: 13px 48px;
    background-color: ${({ theme }) => theme.background};

    & > div {
      font-size: 16px;
      color: ${({ theme }) => theme.text};
    }
  }
`;

export default GradButtonDark;
