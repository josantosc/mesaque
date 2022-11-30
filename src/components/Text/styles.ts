import styled from "styled-components/native";

export const Content = styled.Text`
  text-align: justify;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
