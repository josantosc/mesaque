import { StyleSheet, ScrollView } from "react-native";
import { DailyVerse } from "./DailyVerse";
import { Shortcuts } from "./Shortcuts";
import { Videos } from "./Videos";

export function Home() {
  return (
    <ScrollView style={styles.Container}>
      <Shortcuts />
      <DailyVerse />
      <Videos />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    width: "100%",
  },
});
