import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import logoImg from "@assets/favicon.png";
import { AppStackNavigationProps } from "@routes/app/stack-params";

import { Container, Logo, BackButton, BackIcon } from "./styles";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const { goBack } = useNavigation<AppStackNavigationProps>();

  const handleOnPress = useCallback(() => {
    goBack();
  }, []);

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleOnPress}>
          <BackIcon name="arrow-back-ios" />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
