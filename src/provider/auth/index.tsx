import React, { createContext, ReactNode, useState, useEffect } from "react";
import { ProviderProps, UserProps } from "../../types/types";

export const AuthContext = createContext<{
  user: UserProps | null;
  logged: boolean;
}>({
  user: null,
  logged: false,
});

export default function Provider({ children }: ProviderProps) {
  const [user, updateUser] = useState<UserProps | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        logged: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
