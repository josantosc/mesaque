import Mdicons from "@expo/vector-icons/MaterialIcons";

import logoImg from "@assets/favicon.png";

import { Container, Logo, BackButton, BackIcon } from "./styles";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon name="arrow-back-ios" />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
