import { Container, Content } from "./styles";

type Props = {
  content: string;
};

export function Subtitle({ content }: Props) {
  return (
    <Container>
      <Content>{content}</Content>
    </Container>
  );
}
