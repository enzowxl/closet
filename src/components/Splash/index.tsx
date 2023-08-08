import { Image, StyleSheet, View } from "react-native";
import { COLORS, IMAGES } from "../../constants";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 250,
          height: 250,
        }}
        source={IMAGES.app_icon}
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
});
