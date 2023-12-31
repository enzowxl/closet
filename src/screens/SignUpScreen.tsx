import { StyleSheet, View } from "react-native";
import { COLORS, IMAGES, SCREENS_NO_AUTH } from "../constants";
import { useState } from "react";
import InputSign from "../components/InputSign";
import ButtonSign from "../components/ButtonSign";
import TextSign from "../components/TextSign";
import PhotoSign from "../components/PhotoSign";
import TitleSign from "../components/TitleSign";
import ModalOptions from "../components/ModalOptions";
import { dataSignUp } from "../components/ModalOptions/datas/signUp";
import { navigate } from "../utils/signUp";
import RemovePhotoSign from "../components/RemovePhotoSign";
import { useAuth } from "../provider/auth";

export default function SignUpScreen({ navigation }: any) {
  const { signUp } = useAuth();

  const [photo, updatePhoto] = useState<any>(null);
  const [name, updateName] = useState<string>("");
  const [lastName, updateLastName] = useState<string>("");
  const [email, updateEmail] = useState<string>("");
  const [password, updatePassword] = useState<string>("");
  const [confirmPassword, updateConfirmPassword] = useState<string>("");

  const [viewPassword, updateViewPassword] = useState<boolean>(true);

  const [modalOptions, updateModalOptions] = useState(false);

  return (
    <View style={styles.container}>
      {modalOptions && (
        <ModalOptions
          data={dataSignUp}
          modalOptions={modalOptions}
          updateModalOptions={() => updateModalOptions(!modalOptions)}
          updatePhoto={updatePhoto}
        />
      )}
      <TitleSign mBottom={40} title={`Sign `} title_2={"Up"} />
      <PhotoSign
        onPress={() => updateModalOptions(true)}
        existing={!!photo}
        image={photo ? { uri: photo } : IMAGES.gallery}
      />
      {photo && <RemovePhotoSign updatePhoto={() => updatePhoto(null)} />}
      <InputSign
        viewPassword={false}
        imageR={false}
        updateViewPassword={false}
        value={name}
        changeText={(t: string) => updateName(t)}
        placeholder={"Your name"}
        imageL={IMAGES.user}
      />
      <InputSign
        viewPassword={false}
        imageR={false}
        updateViewPassword={false}
        value={lastName}
        changeText={(t: string) => updateLastName(t)}
        placeholder={"Your last name"}
        imageL={IMAGES.user}
      />
      <InputSign
        viewPassword={false}
        imageR={false}
        updateViewPassword={false}
        value={email}
        changeText={(t: string) => updateEmail(t)}
        placeholder={"Your email"}
        imageL={IMAGES.email}
      />
      <InputSign
        value={password}
        viewPassword={viewPassword}
        updateViewPassword={() => updateViewPassword(!viewPassword)}
        changeText={(t: string) => updatePassword(t)}
        placeholder={"Your password"}
        imageL={IMAGES.lock}
        imageR={viewPassword ? IMAGES.eye : IMAGES.eye_}
      />
      <InputSign
        value={confirmPassword}
        viewPassword={viewPassword}
        updateViewPassword={() => updateViewPassword(!viewPassword)}
        changeText={(t: string) => updateConfirmPassword(t)}
        placeholder={"Confirm password"}
        imageL={IMAGES.lock}
        imageR={viewPassword ? IMAGES.eye : IMAGES.eye_}
      />
      <ButtonSign
        onPress={() =>
          signUp({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            photo: photo,
          })
        }
        title={"Continue"}
      />
      <TextSign
        onPress={() => navigate({ screen: SCREENS_NO_AUTH.SIGNIN, navigation })}
        title={`Have account? `}
        title_2={"Sign In"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
