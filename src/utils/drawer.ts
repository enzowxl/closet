import { Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const drawer = new Animated.Value(0);

const scale = drawer.interpolate({
  inputRange: [0, width / 2],
  outputRange: [0.9, 1],
});

const border = drawer.interpolate({
  inputRange: [0, width / 2],
  outputRange: [10, 0],
});

export const animatedStyle = {
  height: "100%",
  width: width,
  borderRadius: border,
  transform: [{ scale: scale }],
  overflow: "hidden",
};

export function DrawerAnimated(isOpen: boolean) {
  Animated.timing(drawer, {
    toValue: isOpen ? 0 : width / 2,
    duration: 500,
    useNativeDriver: false,
  }).start();
}
