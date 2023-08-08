import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

export default function RemovePhotoSign({ updatePhoto }: any) {
  return (
    <TouchableOpacity onPress={updatePhoto}>
      <Text style={styles.text}>
        Remove <Text style={styles.text2}>photo</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: COLORS.tertiary,
  },
  text2: {
    color: COLORS.secondary,
  },
});
