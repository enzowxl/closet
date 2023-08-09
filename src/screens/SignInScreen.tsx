import { StyleSheet, View } from "react-native";
import { COLORS, IMAGES, SCREENS_NO_AUTH } from "../constants";
import InputSign from "../components/InputSign";
import ButtonSign from "../components/ButtonSign";
import TextSign from "../components/TextSign";
import TitleSign from "../components/TitleSign";
import { useState } from "react";
import { navigate } from "../utils/singIn";
import { useAuth } from "../provider/auth";

export default function SignInScreen({ navigation }: any) {
  const { signIn } = useAuth();

  const [email, updateEmail] = useState<string>("");
  const [password, updatePassword] = useState<string>("");

  const [viewPassword, updateViewPassword] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <TitleSign mBottom={40} title={`Sign `} title_2={"In"} />
      <InputSign
        viewPassword={false}
        updateViewPassword={false}
        value={email}
        changeText={(t: string) => updateEmail(t)}
        placeholder={"Your email"}
        imageL={IMAGES.email}
        imageR={null}
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
      <ButtonSign
        onPress={() =>
          signIn({
            email: email,
            password: password,
          })
        }
        title={"Go"}
      />
      <TextSign
        onPress={() => navigate({ screen: SCREENS_NO_AUTH.SIGNUP, navigation })}
        title={`Don't have an account? `}
        title_2={"Sign Up"}
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
