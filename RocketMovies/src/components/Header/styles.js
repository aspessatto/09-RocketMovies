import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 64px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
  padding: 24px 124px;

  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.STROKE_LINE};

  > h1 a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  > div {
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    display: flex;
    flex-direction: column;
    align-items: end;
    font-size: 14px;
    line-height: 24px;
    width: 140px;

    span a {
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

`;