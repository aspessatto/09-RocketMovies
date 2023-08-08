import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 200px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

border: none;
resize: none;

padding: 20px 24px;
margin: 40px 0;
border-radius: 10px;
`;