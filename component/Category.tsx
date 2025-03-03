import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import images from "@/constants/images";
import { ThemeContext } from "@/app/Context/ThemeContext";
const Category = () => {
  interface Data {
    title: string;
    image: ImageSourcePropType;
    isOffer: boolean;
    offerValue: number;
  }

  const categoryData: Data[] = [
    {
      title: "Home Cleaning",
      image: images.cleaning1,
      isOffer: true,
      offerValue: 10,
    },
    {
      title: "Carpet Cleaning",
      image: images.cleaning2,
      isOffer: true,
      offerValue: 10,
    },
    {
      title: "Plates Cleaning",
      image: images.cleaning3,
      isOffer: true,
      offerValue: 10,
    },
  ];
  const { isDark } = useContext(ThemeContext);
  return (
    <FlatList
      horizontal
      style={{
        marginTop: 10,
      }}
      contentContainerStyle={{
        gap: 16,
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.title}
      data={categoryData}
      renderItem={({ item }) => (
        <TouchableOpacity className="w-44 gap-3">
          <Image
            className="w-full h-52 rounded-xl  "
            source={item.image}
            resizeMode="cover"
          />

          <Text
            className={
              isDark
                ? "font-bold text-center text-white"
                : "font-bold text-center"
            }
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Category;
