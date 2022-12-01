import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "@components/Header";

import { Home } from "@screens/Home";
import { Agenda } from "@screens/Agenda";
import { Oferta } from "@screens/Oferta";

import { AppStackParamsList, AppScreens } from "./stack-params";

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamsList>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName={AppScreens.home}
      screenOptions={{ header: (props) => <Header showBackButton /> }}
    >
      <Screen
        name={AppScreens.home}
        component={Home}
        options={{ header: () => <Header /> }}
      />
      <Screen name={AppScreens.agenda} component={Agenda} />
      <Screen name={AppScreens.oferta} component={Oferta} />
    </Navigator>
  );
}
