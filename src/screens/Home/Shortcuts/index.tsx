import { View, StyleSheet } from "react-native";

import { Subtitle } from "@components/Subtitle";

import { Card } from "../../../components/Card";

type ShortcutCardProps = {
  title: string;
};

function ShortcutCard({ title }: ShortcutCardProps) {
  return (
    <Card>
      <View style={styles.cardContainer}>
        <Subtitle content={title} />
      </View>
    </Card>
  );
}

export function Shortcuts() {
  return (
    <View>
      <View style={styles.shortcuts}>
        <ShortcutCard title="Agenda" />
        <ShortcutCard title="Devocional" />
      </View>
      <View style={styles.shortcuts}>
        <ShortcutCard title="Eventos" />
        <ShortcutCard title="Oferta" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shortcuts: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 21,
  },
  cardContainer: {
    width: 159,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    fontStyle: "normal",
  },
});
