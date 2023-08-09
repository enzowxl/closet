import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface UserProps {
  id: string;
  name: string;
  lastName: string;
  email: string;
  photo: string;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export interface InputProps {
  imageL: any;
  imageR: any;
  placeholder: string;
  value: string;
  changeText: any;
  viewPassword: boolean;
  updateViewPassword: any;
}

export interface PhotoProps {
  image: any;
  onPress: () => void;
  existing: boolean;
}

export interface TextProps {
  title: string;
  title_2: string;
  onPress: () => void;
}

export interface TitleProps {
  title: string;
  title_2: string;
  mBottom: number;
}

export interface ModalOptionsProps {
  data: any;
  modalOptions: boolean;
  updateModalOptions: () => void;
  updatePhoto: any;
}

export interface signInProps {
  email: string;
  password: string;
}

export interface signUpProps {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string | any;
}

export interface HeaderRightProps {
  imageR: any;
  onPressR: any;
  type: string;
  children: ReactNode;
}

export interface HeaderLeftProps {
  onPressL: any;
  imageL: any;
  type: string;
  children: ReactNode;
}

export interface HeaderCenterProps {
  textCenter: string;
}

export interface ChildrenProps {
  children: ReactNode;
}
