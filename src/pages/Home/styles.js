import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";
`;

export const Content = styled.div`
  padding: 40px 124px 60px;
  grid-area: content;
  overflow-y: auto;

  > .section {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 40px;

    h1 {
      font-weight: 400;
      font-size: 32px;
      width: 190px;
    }

    div {
      width: 800px;
    }
  }
`;

export const AddMovie = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 250px;
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