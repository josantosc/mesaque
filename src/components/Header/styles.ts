import Mdicons from "@expo/vector-icons/MaterialIcons";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(Mdicons)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;
