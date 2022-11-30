import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "@components/Header";

import { Home } from "@screens/Home";
import { Agenda } from "@screens/Agenda";

import { AppStackParams } from "./app-stack-params";

const { Navigator, Screen } = createNativeStackNavigator<AppStackParams>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{ header: (props) => <Header showBackButton /> }}
    >
      <Screen
        name="home"
        component={Home}
        options={{ header: () => <Header /> }}
      />
      <Screen name="agenda" component={Agenda} />
    </Navigator>
  );
}
