import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px 0;
`;

export const ShortcutCardContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 8px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;
