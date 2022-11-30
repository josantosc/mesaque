import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";
import { Routes } from "./src/routes";

import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
