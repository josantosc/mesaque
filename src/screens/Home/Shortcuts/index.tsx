import { View, Text, StyleSheet } from "react-native";
import { Card } from "../../../components/Card";

export function Shortcuts() {
  return (
    <View>
      <View style={styles.shortcuts}>
        <Card>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Agenda</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Eventos</Text>
          </View>
        </Card>
      </View>
      <View style={styles.shortcuts}>
        <Card>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Devocional</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Oferta</Text>
          </View>
        </Card>
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
