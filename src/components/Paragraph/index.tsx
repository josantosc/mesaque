import { StyleProp, TextStyle } from "react-native";

import { Content } from "./styles";

type Props = {
  content: string;
  style?: StyleProp<TextStyle>;
};

export function Paragraph({ content, style }: Props) {
  return <Content style={style}>{content}</Content>;
}
