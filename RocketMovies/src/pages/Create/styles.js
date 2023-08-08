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
  }
`;

export const Form = styled.form`
  padding: 40px 114px 85px;

  > header {
    a {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
 
  > div:nth-child(2) {
    display: flex;
    gap: 40px;
    margin-top: 40px;
  }

  > h2 {
    font-size: 20;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 16px;
    margin: 24px 0 40px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
  }

  .buttons {
    display: flex;
    gap: 40px;
  }

  .delete {
    width: 100%;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;