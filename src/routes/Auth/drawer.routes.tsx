import { StyleSheet, View } from "react-native";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { DrawerAnimated, animatedStyle } from "../../utils/drawer";
import { COLORS, SCREENS_AUTH } from "../../constants";
import CustomDrawer from "../../components/Drawer";
import HomeScreen from "../../screens/HomeScreen";

export default function AuthRoutes() {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.cont}>
      <Drawer.Navigator
        initialRouteName={SCREENS_AUTH.HOME}
        screenOptions={styles.drawer as any}
        drawerContent={(props) => {
          const drawerStatus = useDrawerStatus();
          const isDrawerOpen = drawerStatus === "open";

          DrawerAnimated(isDrawerOpen);

          return <CustomDrawer navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name={SCREENS_AUTH.HOME}>
          {(props) => <HomeScreen {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    drawerType: "slide",
    overlayColor: "transparent",
    drawerStyle: {
      flex: 1,
      width: "65%",
      padding: 30,
      backgroundColor: "transparent",
    },
    sceneContainerStyle: {
      backgroundColor: "transparent",
    },
    headerShown: false,
  },
  cont: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});
