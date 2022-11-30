import { useVerse } from "@shared/hooks/useVerse";

import { Card } from "@components/Card";
import { Title } from "@components/Title";
import { Subtitle } from "@components/Subtitle";
import { Paragraph } from "@components/Paragraph";

import { CardContainer, Container } from "./styles";

export function DailyVerse() {
  const { title, verse } = useVerse();

  return (
    <Container>
      <Title content="Versículo do dia"></Title>
      <Card>
        <CardContainer>
          <Subtitle content={title} />
          <Paragraph content={verse} style={{ marginTop: 8 }} />
        </CardContainer>
      </Card>
    </Container>
  );
}
