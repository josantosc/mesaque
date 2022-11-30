import styled from "styled-components/native";

export const Container = styled.View`
  margin: 16px 0;
`;

export const Content = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
