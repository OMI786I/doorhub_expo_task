import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "@/constants/images";
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

  return (
    <FlatList
      contentContainerClassName="gap-2 "
      horizontal
      style={{
        marginTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.title}
      data={categoryData}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image className="w-44 h-44 rounded-xl" source={item.image} />
            <Text className="font-bold text-center">{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Category;
