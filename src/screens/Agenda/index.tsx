import { useAgenda } from "@shared/hooks/useAgenda";

import { Card } from "@components/Card";
import { Text } from "@components/Text";
import { Title } from "@components/Title";
import { Subtitle } from "@components/Subtitle";

import { Container, PageTitleContainer, CardContainer, Image } from "./styles";

export function Agenda() {
  const agenda = useAgenda();

  const daysMap: Record<string, string> = {
    Domingo: "sunday",
    "Segunda-Feira": "monday",
    "Terça-Feira": "tuesday",
    "Quarta-Feira": "wednesday",
    "Quinta-Feira": "thursday",
    "Sexta-Feira": "friday",
    Sábado: "saturday",
  };

  const daysOfWeek = Object.keys(daysMap);

  return (
    <Container>
      <PageTitleContainer>
        <Title content="Agenda" />
      </PageTitleContainer>
      {daysOfWeek.map((name) => (
        <>
          <Subtitle content={name} style={{ marginBottom: 8 }} />
          {agenda[daysMap[name]].map((el) => (
            <Card key={el.title} style={{ marginBottom: 16 }}>
              <CardContainer>
                <Image />
                <Text content={el.title} />
              </CardContainer>
            </Card>
          ))}
        </>
      ))}
    </Container>
  );
}
