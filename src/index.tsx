import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

import Provider from "./provider/auth";
import Routes from "./routes/index.routes";
import Splash from "./components/Splash";

export default function App() {
  LogBox.ignoreAllLogs();

  const [fonts] = useFonts({
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    Roboto_400Regular,
  });

  if (!fonts) return <Splash />;

  return (
    <NavigationContainer>
      <Provider>
        <Routes />
        <StatusBar hidden />
      </Provider>
    </NavigationContainer>
  );
}
