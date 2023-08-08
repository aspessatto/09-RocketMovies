import styled from 'styled-components';

export const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.TEXT_BLACK};


  &:disabled {
    opacity: 0.5;
  }
`;