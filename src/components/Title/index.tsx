import { Container, Title as TextTitle } from "./styles";

type Props = {
  content: string;
};

export function Title({ content }: Props) {
  return (
    <Container>
      <TextTitle>{content}</TextTitle>
    </Container>
  );
}
