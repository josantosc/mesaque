import { DailyVerse } from "./DailyVerse";
import { Shortcuts } from "./Shortcuts";
import { Videos } from "./Videos";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Shortcuts />
      <DailyVerse />
      {/* <Videos /> */}
    </Container>
  );
}
