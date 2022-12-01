import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacityProps } from "react-native";

import { AppScreens, AppStackNavigationProps } from "@routes/app/stack-params";

import { Card } from "@components/Card";
import { Subtitle } from "@components/Subtitle";

import { Container, ShortcutCardContainer } from "./styles";

type ShortcutCardProps = TouchableOpacityProps & {
  title: string;
};

function ShortcutCard({ title, ...rest }: ShortcutCardProps) {
  return (
    <ShortcutCardContainer {...rest}>
      <Card style={{ padding: 16 }}>
        <Subtitle content={title} />
      </Card>
    </ShortcutCardContainer>
  );
}

export function Shortcuts() {
  const { navigate } = useNavigation<AppStackNavigationProps>();

  const data: Array<{ title: string; path?: AppScreens }> = [
    { title: "Agenda", path: AppScreens.agenda },
    { title: "Oferta", path: AppScreens.oferta },
    { title: "Devocional", path: undefined },
    { title: "Eventos", path: undefined },
  ];

  const handleOnPress = useCallback((path?: AppScreens) => {
    if (!path) return;

    navigate(path);
  }, []);

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ShortcutCard
            title={item.title}
            onPress={() => handleOnPress(item.path)}
            disabled={!item.path}
          />
        )}
      />
    </Container>
  );
}
