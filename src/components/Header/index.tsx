import logoImg from "@assets/favicon.png";

import { Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
