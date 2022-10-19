import { FlexStyle, StyleProp, StyleSheet, View } from "react-native";

interface CardProps {
  children: JSX.Element;
  style?: StyleProp<FlexStyle>;
}

export const Card = ({ children, style }: CardProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
  },
});
