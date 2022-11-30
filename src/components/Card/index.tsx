import { FlexStyle, StyleProp } from "react-native";

import { Container } from "./styles";

type Props = {
  children: JSX.Element;
  style?: StyleProp<FlexStyle>;
};

export function Card({ children, style }: Props) {
  return <Container style={style}>{children}</Container>;
}
