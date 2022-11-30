import { StyleSheet, View, Text } from "react-native";
import { Title } from "@components/Title";

import { Card } from "../../../components/Card";

export function DailyVerse() {
  return (
    <View>
      <Title content="Versículo do dia"></Title>
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
