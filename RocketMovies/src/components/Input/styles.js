import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
  border-radius: 10px;

  margin-bottom: 8px;

  > svg {
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
  }

  > input {
    width: 100%;
    height: 56px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    padding: 20px 24px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    }

    

  }
`;