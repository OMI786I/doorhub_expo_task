import { ImageSourcePropType } from "react-native";
import images from "@/constants/images";
import icons from "./icons";
export interface Data {
  id: number;
  title: string;
  rating: number;
  money: number;
  image: ImageSourcePropType;
  icons: ImageSourcePropType;
}

export const data: Data[] = [
  {
    id: 1,
    title: "AC check up",
    rating: 4.8,
    money: 128,
    image: images.appliance_image_1,
    icons: icons.icon1,
  },
  {
    id: 2,
    title: "AC regular service",
    rating: 4.5,
    money: 128,
    image: images.appliance_image_2,
    icons: icons.icon5,
  },
  {
    id: 3,
    title: "AC installation",
    rating: 4.5,
    money: 170,
    image: images.appliance_image_3,
    icons: icons.icon3,
  },
  {
    id: 4,
    title: "AC uninstallation",
    rating: 4.5,
    money: 170,
    image: images.appliance_image_4,
    icons: icons.icon4,
  },
];
