import { FlatList } from "react-native";

import { Card } from "@components/Card";
import { Subtitle } from "@components/Subtitle";

import { Container, ShortcutCardContainer } from "./styles";

type ShortcutCardProps = {
  title: string;
};

function ShortcutCard({ title }: ShortcutCardProps) {
  return (
    <ShortcutCardContainer>
      <Card>
        <Subtitle content={title} />
      </Card>
    </ShortcutCardContainer>
  );
}

export function Shortcuts() {
  const data: Array<{ title: string }> = [
    { title: "Agenda" },
    { title: "Devocional" },
    { title: "Eventos" },
    { title: "Oferta" },
  ];

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <ShortcutCard title={item.title} />}
      />
    </Container>
  );
}
