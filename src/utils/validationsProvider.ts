import { ToastAndroid } from "react-native";
import { signInProps, signUpProps } from "../types/types";

export function validateSignUp({
  name,
  lastName,
  email,
  password,
  confirmPassword,
  photo,
}: signUpProps) {
  let errorMessage = "";
  switch (true) {
    case name.length === 0:
      errorMessage = "Name is required";
      break;
    case lastName.length === 0:
      errorMessage = "Last name is required";
      break;
    case email.length === 0:
      errorMessage = "Email is required";
      break;
    case password.length === 0:
      errorMessage = "Password is required";
      break;
    case confirmPassword.length === 0:
      errorMessage = "Confirm password is required";
      break;
    case password.length <= 5:
      errorMessage = "Password must be at least 6 characters long";
      break;
    case password !== confirmPassword:
      errorMessage = "Passwords do not match";
      break;
    default:
      break;
  }
  if (errorMessage) {
    return ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
  }
}

export function validateSignIn({ email, password }: signInProps) {
  let errorMessage = "";
  switch (true) {
    case email.length === 0:
      errorMessage = "Email is required";
      break;
    case password.length === 0:
      errorMessage = "Password is required";
      break;
    default:
      break;
  }
  if (errorMessage) {
    return ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
  }
}
