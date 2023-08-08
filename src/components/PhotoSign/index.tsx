import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { PhotoProps } from "../../types/types";

export default function PhotoSign({ image, onPress, existing }: PhotoProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cont}>
      <Image source={image} style={existing ? styles.image2 : styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: COLORS.secondary,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 100,
  },
  image: {
    width: 40,
    height: 40,
    tintColor: COLORS.tertiary,
    resizeMode: "contain",
  },
});
