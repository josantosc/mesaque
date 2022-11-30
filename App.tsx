import {
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "@components/Loading";
import { AppRoutes } from "@routes/app";

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
      <NavigationContainer>
        {fontsLoaded ? <AppRoutes /> : <Loading />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
