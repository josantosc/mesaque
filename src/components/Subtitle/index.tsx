import { StyleProp, TextStyle } from "react-native";

import { Content } from "./styles";

type Props = {
  content: string;
  style?: StyleProp<TextStyle>;
};

export function Subtitle({ content, style }: Props) {
  return <Content style={style}>{content}</Content>;
}
