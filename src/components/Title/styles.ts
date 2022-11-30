import styled from "styled-components/native";

export const Container = styled.View`
  margin: 16px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
