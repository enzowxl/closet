import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import {
  ProviderProps,
  UserProps,
  signInProps,
  signUpProps,
} from "../../types/types";
import {
  validateSignIn,
  validateSignUp,
} from "../../utils/validationsProvider";

export const AuthContext = createContext<{
  user: UserProps | null;
  logged: boolean;
  signUp: any;
  signIn: any;
}>({
  user: null,
  logged: false,
  signUp: () => {},
  signIn: () => {},
});

export default function Provider({ children }: ProviderProps) {
  const [user, updateUser] = useState<UserProps | null>({});

  function signUp({
    name,
    lastName,
    email,
    password,
    confirmPassword,
    photo,
  }: signUpProps) {
    validateSignUp({ name, lastName, email, password, confirmPassword, photo });
  }

  function signIn({ email, password }: signInProps) {
    validateSignIn({ email, password });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        logged: !!user,
        signUp,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
