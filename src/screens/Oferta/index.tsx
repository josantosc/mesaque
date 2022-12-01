import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { Title } from "@components/Title";

import { Container, Item, TitleContainer } from "./styles";

export function Oferta() {
  return (
    <Container>
      <TitleContainer>
        <Title content="Ofertas e Dízimos" />
      </TitleContainer>
      <Item>
        <Subtitle content="Chave Pix" />
        <Paragraph content="608.228.633-24" style={{ fontWeight: "700" }} />
      </Item>
      <Item>
        <Subtitle content="Nome" />
        <Paragraph content="Gleiciane de C. Rubim Durans" />
      </Item>
      <Item>
        <Subtitle content="CPF/CNPJ" />
        <Paragraph content="608.228.633-24" />
      </Item>
      <Item>
        <Subtitle content="Banco" />
        <Paragraph content="260 - Nu Pagamentos SA" />
      </Item>
    </Container>
  );
}
