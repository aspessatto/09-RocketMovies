import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 156px 0;
  }
`;

export const Content = styled.div`
  padding-bottom: 156px;
  margin: 0 auto;

  > div:nth-child(2) {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 24px;
  }

  p {
  margin-top: 60px;
  font-size: 16px;
  text-align: justify;
  }
`;

export const UserInfo = styled.div`

  display: flex;
  gap: 8px;
  margin-bottom: 60px;
  align-items: center;

  > img {
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`;