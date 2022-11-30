import { Card } from "@components/Card";
import { Title } from "@components/Title";
import { Subtitle } from "@components/Subtitle";
import { Paragraph } from "@components/Paragraph";

import { CardContainer, Container } from "./styles";

export function DailyVerse() {
  const chapter = "Mateus 6:33";
  const content =
    "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.";

  return (
    <Container>
      <Title content="Versículo do dia"></Title>
      <Card>
        <CardContainer>
          <Subtitle content={chapter} />
          <Paragraph content={content} style={{ marginTop: 8 }} />
        </CardContainer>
      </Card>
    </Container>
  );
}
