import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import image1 from "../assets/images/welcome_image_1.png";
import image2 from "../assets/images/welcome_image_2.png";
import image3 from "../assets/images/welcome_image_3.png";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

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
      {/**top part */}
      <View className="relative">
        {" "}
        <View className="items-end p-6">
          <TouchableOpacity
            onPress={() => {
              router.push("/signin/sign-in");
            }}
            className="bg-[#B5EBCD]  p-2 rounded-3xl w-[15%]"
          >
            <Text className="text-center">Skip</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-[#FFCACA] w-[80] h-[80] rounded-full absolute -left-10 -top-7"></View>
      </View>

      {/**middle part */}
      <View>
        <View className="w-[193.54px] h-[382.85px] mx-auto  justify-center rounded-3xl relative ">
          <View className="bg-[#CABDFF] rounded-full pt-6  h-[80%] w-full mx-auto "></View>
          <Image
            source={require("../assets/images/welcome_image_1.png")}
            className="w-full h-[95%] rounded-full absolute overflow-hidden"
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
