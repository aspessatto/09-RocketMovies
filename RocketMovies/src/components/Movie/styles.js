import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 32px;
  margin-bottom: 24px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    margin-bottom: 8px;
  }

  footer {
    text-align: left;
    margin-top: 50px;
  }
`;