import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface UserProps {}

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
