import * as ImagePicker from "expo-image-picker";

export async function Gallery(updatePhoto: any) {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    updatePhoto(result.assets[0].uri);
  }
}

export async function Camera(updatePhoto: any) {
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    updatePhoto(result.assets[0].uri);
  }
}

export function navigate({ navigation, screen }: any) {
  navigation.navigate(screen);
}

export function ButtonSingUp({ data }: any) {
  console.log(data);
}
