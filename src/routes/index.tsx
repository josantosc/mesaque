import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
