import styled from 'styled-components';

export const Container = styled.div`

> div {
  color: ${({ theme }) => theme.COLORS.PINK};
  display: flex;
  gap: 10px;
  
  svg {
    font-size: 20px;
    fill: ${({ theme }) => theme.COLORS.PINK};
  }

  svg:last-child {
    fill: transparent;
  }
}

`;