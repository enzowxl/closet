import { Animated, StyleSheet, Image } from "react-native";
import { Header } from "../components/Header";
import { COLORS, IMAGES } from "../constants";
import { animatedStyle } from "../utils/drawer";

export default function HomeScreen({ navigation }: any) {
  return (
    <Animated.View style={[styles.cont, animatedStyle as any]}>
      <Header.Root>
        <Header.Left
          type="image"
          imageL={IMAGES.menu}
          onPressL={() => navigation.openDrawer()}
        />
        <Header.Center textCenter="HOME" />
        <Header.Right type="no-image" imageR={false} onPressR={() => {}}>
          <Image
            style={{ width: 30, height: 30, borderRadius: 30 }}
            source={IMAGES.personImage}
          />
        </Header.Right>
      </Header.Root>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
