import { StyleSheet, View, Text } from "react-native";
import { Card } from "@components/Card";

export function Agenda() {
  const agendas = [
    { title: "01/10 - Culto de Jovens" },
    { title: "02/10 - EBD" },
    { title: "02/10 - Culto de Domingo" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Agenda</Text>
      </View>
      {agendas.map((agenda) => (
        <Card key={agenda.title} style={{ marginBottom: 16 }}>
          <View style={styles.agendaContainer}>
            <View style={styles.agendaImage} />
            <Text style={styles.agendaTitle}>{agenda.title}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    lineHeight: 48,
    fontWeight: "500",
  },
  agendaContainer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  agendaImage: {
    width: 82,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#737380",
  },
  agendaTitle: {
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
});
