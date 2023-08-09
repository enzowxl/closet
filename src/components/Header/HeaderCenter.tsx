import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { HeaderCenterProps } from "../../types/types";

export default function HeaderCenter({ textCenter }: HeaderCenterProps) {
  return <Text style={styles.text}>{textCenter}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "RobotoSlab_700Bold",
    color: COLORS.secondary,
  },
});
