import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { HeaderRightProps } from "../../types/types";

export default function HeaderRight({
  imageR,
  onPressR,
  type,
  children,
}: HeaderRightProps | any) {
  return (
    <>
      {type === "image" ? (
        <TouchableOpacity onPress={onPressR}>
          <Image source={imageR} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressR}>{children}</TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    tintColor: COLORS.secondary,
  },
});
