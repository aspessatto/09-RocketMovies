import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 10px;

`;