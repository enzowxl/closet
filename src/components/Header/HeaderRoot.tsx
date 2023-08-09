import { View, StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "../../constants";
import { ChildrenProps } from "../../types/types";

export default function HeaderRoot({ children }: ChildrenProps) {
  const { width } = useWindowDimensions();

  return <View style={[styles.cont, { width }]}>{children}</View>;
}

const styles = StyleSheet.create({
  cont: {
    height: 90,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf:'center',
    padding: 30,
  },
});
