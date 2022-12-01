import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export enum AppScreens {
  home = "home",
  agenda = "agenda",
  oferta = "oferta",
}

export type AppStackParamsList = {
  [AppScreens.home]: undefined;
  [AppScreens.agenda]: undefined;
  [AppScreens.oferta]: undefined;
};

export type AppStackNavigationProps =
  NativeStackNavigationProp<AppStackParamsList>;
