import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SCREENS_NO_AUTH } from "../../constants";
import InitialScreen from "../../screens/InitialScreen";
import SignInScreen from "../../screens/SignInScreen";
import SignUpScreen from "../../screens/SignUpScreen";

export default function NoAuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        transitionSpec: {
          open: { animation: "timing", config: { duration: 500 } },
          close: { animation: "timing", config: { duration: 500 } },
        },
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    >
      <Stack.Screen name={SCREENS_NO_AUTH.INITIAL} component={InitialScreen} />
      <Stack.Screen name={SCREENS_NO_AUTH.SIGNIN} component={SignInScreen} />
      <Stack.Screen name={SCREENS_NO_AUTH.SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
