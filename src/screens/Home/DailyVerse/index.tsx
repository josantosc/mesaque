import { StyleSheet, View, Text } from "react-native";
import { Card } from "../../../components/Card";

export function DailyVerse() {
  return (
    <View>
      <Text style={styles.title}>Versículo do dia</Text>
      <Card>
        <View style={styles.card}>
          <Text style={styles.chapter}>Mateus 6:33</Text>
          <Text style={styles.verse}>
            Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e
            todas essas coisas lhes serão acrescentadas.
          </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 26,
    lineHeight: 48,
  },
  card: {
    margin: 12,
    marginHorizontal: 8,
  },
  chapter: {
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  verse: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
  },
});
