import { StyleSheet, Text, View } from "react-native";
import { COLORS, IMAGES } from "../constants";
import InputSign from "../components/InputSign";
import ButtonSign from "../components/ButtonSign";
import TextSign from "../components/TextSign";
import TitleSign from "../components/TitleSign";
import { useState } from "react";
import { ButtonSingIn, navigate } from "../utils/singIn";

export default function SignInScreen({ navigation }: any) {
  const [email, updateEmail] = useState<string>("");
  const [password, updatePassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <TitleSign mBottom={40} title={`Sign `} title_2={"In"} />
      <InputSign
        value={email}
        changeText={(t: string) => updateEmail(t)}
        placeholder={"Your email"}
        imageL={IMAGES.email}
        imageR={null}
      />
      <InputSign
        value={password}
        changeText={(t: string) => updatePassword(t)}
        placeholder={"Your password"}
        imageL={IMAGES.lock}
        imageR={null}
      />
      <ButtonSign
        onPress={() =>
          ButtonSingIn({
            data: {
              email: email,
              password: password,
            },
          })
        }
        title={"Go"}
      />
      <TextSign
        onPress={() => navigate({ screen: "SignUp", navigation })}
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
