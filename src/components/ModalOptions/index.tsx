import { Modal } from "react-native";
import { ModalOptionsProps } from "../../types/types";
import { View } from "react-native";
import { COLORS } from "../../constants";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { Text } from "react-native";
import { useRef } from "react";
import * as Animatable from "react-native-animatable";

export default function ModalOptions({
  data,
  modalOptions,
  updateModalOptions,
  updatePhoto,
}: ModalOptionsProps) {
  const ref = useRef<any>(null);

  const { width } = useWindowDimensions();

  function closeModal() {
    ref.current?.fadeOutDownBig();
    setTimeout(() => {
      updateModalOptions();
    }, 500);
  }

  return (
    <Modal transparent statusBarTranslucent visible={modalOptions}>
      <View
        onTouchEnd={closeModal}
        style={{ flex: 1, backgroundColor: COLORS.black_05 }}
      >
        <Animatable.View
          ref={ref}
          animation={"fadeInUpBig"}
          style={[styles.options, { width }]}
        >
          {data.map(({ id, image, name, onPress }: any) => {
            return (
              <TouchableOpacity
                key={id}
                onPress={() => onPress(updatePhoto)}
                style={styles.optionsContainer}
              >
                <Image source={image} style={styles.image} />
                <Text style={styles.text}>{name}</Text>
              </TouchableOpacity>
            );
          })}
        </Animatable.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  options: {
    backgroundColor: COLORS.secondary,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  optionsContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    tintColor: COLORS.tertiary,
  },
  text: {
    fontSize: 18,
    color: COLORS.tertiary,
    fontFamily: "Roboto_400Regular",
    marginLeft: 20,
  },
});
