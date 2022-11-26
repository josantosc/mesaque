import { StyleSheet, View, Text } from "react-native";

import { Card } from "@components/Card";
import { useAgenda } from "@shared/hooks/useAgenda";

export function AgendaScreen() {
  const agenda = useAgenda();

  const daysMap: Record<string, string> = {
    Domingo: "sunday",
    "Segunda-Feira": "monday",
    "Terça-Feira": "tuesday",
    "Quarta-Feira": "wednesday",
    "Quinta-Feira": "thursday",
    "Sexta-Feira": "friday",
    Sábado: "saturday",
  };

  const daysOfWeek = Object.keys(daysMap);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Agenda</Text>
      </View>
      {daysOfWeek.map((name) => (
        <>
          <Text>{name}</Text>
          {agenda[daysMap[name]].map((el) => (
            <Card key={el.title} style={{ marginBottom: 16 }}>
              <View style={styles.agendaContainer}>
                <View style={styles.agendaImage} />
                <Text style={styles.agendaTitle}>{el.title}</Text>
              </View>
            </Card>
          ))}
        </>
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
