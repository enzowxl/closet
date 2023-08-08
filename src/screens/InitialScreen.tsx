import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, IMAGES } from "../constants";
import ButtonSign from "../components/ButtonSign";
import TextSign from "../components/TextSign";
import TitleSign from "../components/TitleSign";
import { navigate } from "../utils/initial";

export default function InitialScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={IMAGES.app_icon} />
      <TitleSign mBottom={10} title={"Swap"} title_2={"Closet"} />
      <Text style={styles.subtitle}>Build your closet and change parts</Text>
      <ButtonSign
        onPress={() => navigate({ navigation, screen: "SignUp" })}
        title={"Get Started"}
      />
      <TextSign
        onPress={() => navigate({ navigation, screen: "SignIn" })}
        title={"Have account? "}
        title_2={"Sign In"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.tertiary,
    fontFamily: "Roboto_400Regular",
    marginBottom: 50,
  },
  icon: {
    width: 250,
    height: 250,
  },
});
