import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { TextProps } from "../../types/types";

export default function TextSign({ title, title_2, onPress }: TextProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>
        {title}
        <Text style={styles.title_2}>{title_2}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: COLORS.tertiary,
  },
  title_2: {
    color: COLORS.secondary,
  },
});
