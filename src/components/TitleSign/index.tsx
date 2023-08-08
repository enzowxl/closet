import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";
import { TitleProps } from "../../types/types";

export default function TitleSign({ title, title_2, mBottom }: TitleProps) {
  return (
    <Text style={[styles.title, { marginBottom: mBottom }]}>
      {title}
      <Text style={styles.title_2}>{title_2}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: COLORS.tertiary,
    fontFamily: "RobotoSlab_700Bold",
  },
  title_2: {
    color: COLORS.secondary,
  },
});
