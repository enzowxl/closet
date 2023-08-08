import { IMAGES } from "../../../constants";
import { Camera, Gallery } from "../../../utils/signUp";

export const dataSignUp = [
  {
    id: 1,
    name: "Camera",
    image: IMAGES.cameraOpt,
    onPress: (updatePhoto: any) => Camera(updatePhoto),
  },
  {
    id: 2,
    name: "Gallery",
    image: IMAGES.galleryOpt,
    onPress: (updatePhoto: any) => Gallery(updatePhoto),
  },
];
