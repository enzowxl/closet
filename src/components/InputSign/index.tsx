import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Input } from "@rneui/themed";
import { COLORS } from "../../constants";
import { InputProps } from "../../types/types";

export default function InputSign({
  value,
  changeText,
  imageL,
  imageR,
  placeholder,
  viewPassword,
  updateViewPassword,
}: InputProps) {
  return (
    <Input
      value={value}
      secureTextEntry={viewPassword}
      onChangeText={changeText}
      placeholder={placeholder}
      placeholderTextColor={COLORS.gray}
      leftIcon={<Image source={imageL} style={styles.image} />}
      rightIcon={
        !imageR ? (
          <></>
        ) : (
          <TouchableOpacity onPress={updateViewPassword}>
            <Image source={imageR} style={styles.image} />
          </TouchableOpacity>
        )
      }
      containerStyle={styles.contStyle}
      inputContainerStyle={{
        borderBottomWidth: 0,
      }}
      inputStyle={styles.inputStyle}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.tertiary,
    marginRight: 5,
  },
  contStyle: {
    borderWidth: 1,
    width: 280,
    height: 50,
    borderRadius: 10,
    borderColor: COLORS.tertiary,
    marginBottom: 20,
  },
  inputStyle: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: COLORS.tertiary,
  },
});
