import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { HeaderLeftProps } from "../../types/types";

export default function HeaderLeft({
  imageL,
  onPressL,
  type,
  children,
}: HeaderLeftProps | any) {
  return (
    <>
      {type === "image" ? (
        <TouchableOpacity onPress={onPressL}>
          <Image source={imageL} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressL}>{children}</TouchableOpacity>
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
