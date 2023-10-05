import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

    > header {
      width: 100%;
      height: 144px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

      display: flex;
      align-items: center;
      padding: 0 144px;

      a {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;

  > div:nth-child(3), div:nth-child(5) {
    margin-bottom: 24px;
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: -84px auto 32px;
  height: 186px;
  width: 186px;

  > img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

     input {
      display: none;
     }

     svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.TEXT_BLACK};
     }
  }


`;