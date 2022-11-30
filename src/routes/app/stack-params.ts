import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export enum AppScreens {
  home = "home",
  agenda = "agenda",
}

export type AppStackParamsList = {
  [AppScreens.home]: undefined;
  [AppScreens.agenda]: undefined;
};

export type AppStackNavigationProps =
  NativeStackNavigationProp<AppStackParamsList>;
