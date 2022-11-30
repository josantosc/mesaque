import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 16px;
`;

export const PageTitleContainer = styled.View`
  align-items: center;
`;

export const CardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 16px;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.View`
  width: 82px;
  height: 48px;
  margin-right: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
