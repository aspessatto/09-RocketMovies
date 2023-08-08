import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.BACKGROUND_LIGHT};
  color: ${({ theme, isnew }) => isnew ? theme.COLORS.TEXT_GRAY : theme.COLORS.TEXT_WHITE};

  border: ${({ theme, isnew }) => isnew ? `1px dashed ${theme.COLORS.TEXT_GRAY}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    }
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    }
  }

`;