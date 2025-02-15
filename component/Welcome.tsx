import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import image1 from "../assets/images/welcome_image_1.png";
import image2 from "../assets/images/welcome_image_2.png";
import image3 from "../assets/images/welcome_image_3.png";

const Welcome = () => {
  const data = [
    {
      id: 1,
      image: image1,
      title: "Beauty parlour at your home",
      description:
        "Get professional beauty parlour services at your home for a relaxing and luxurious experience.",
      frontStripeColor: "#F8B0ED",
    },
    {
      id: 2,
      image: image2,
      title: " Plumber & expart nearby you",
      description:
        "Find expert plumbers near you for quick and reliable services.",
      frontStripeColor: "#CABDFF",
    },
    {
      id: 3,
      image: image3,
      title: " Professional home cleaning",
      description:
        "Expert home cleaning services for a spotless and refreshed living space.",
      frontStripeColor: "#FB9B9B",
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity className="bg-[#B5EBCD] p-3 rounded-lg w-[10%]">
          <Text>Skip</Text>
        </TouchableOpacity>

        <View className="bg-[#FFCACA] w-[80] h-[80]">
          <Text className="text-red-50">asd</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
