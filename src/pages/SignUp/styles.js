import styled from 'styled-components';
import backgroundImg from '../../../assets/bg.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const Form = styled.form`
  padding: 0 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;

 > h1 {
    font-size: 48px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
 }

 > p {
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
 }

 > h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 48px 0;
 }

 > a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  margin-top: 42px;
  color: ${({ theme }) => theme.COLORS.PINK};
 }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat, center center;
  background-size: cover;
`;