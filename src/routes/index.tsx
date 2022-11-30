import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app";

export function Routes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
