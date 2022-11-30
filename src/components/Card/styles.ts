import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
