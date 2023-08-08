import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { COLORS } from "../../constants";
import { ButtonProps } from "../../types/types";

export default function ButtonSign({ title, onPress }: ButtonProps) {
  return (
    <Button
      onPress={onPress}
      titleStyle={styles.btnTitle}
      title={title}
      buttonStyle={styles.btnStyle}
    />
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.secondary,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 300,
    width: 250,
    height: 60,
  },
  btnTitle: {
    color: COLORS.tertiary,
    fontFamily: "RobotoSlab_600SemiBold",
    fontSize: 24,
  },
});
