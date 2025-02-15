import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
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
      slogan: ["Hair Style", "Makeup", "Beauty", "HairStyle", "Facial"],
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
      <View className="relative">
        <View className="w-[193.54px] h-[382.85px] mx-auto  justify-center rounded-3xl relative ">
          <View className="bg-[#CABDFF] rounded-full pt-6  h-[80%] w-full mx-auto "></View>
          <Image
            source={require("../assets/images/welcome_image_1.png")}
            className="w-full h-[95%] rounded-full absolute overflow-hidden"
            resizeMode="contain"
          />
        </View>
        {/**Stipe design */}
        <View className="-rotate-[10deg] absolute bottom-16">
          <FlatList
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            horizontal
            contentContainerClassName="-left-2 "
            data={["Hair Style", "Makeup", "Beauty", "HairStyle", "Facial"]}
            renderItem={({ item }) => {
              return (
                <View>
                  <View className="relative">
                    <Image
                      className="-ml-[5px]"
                      source={require("../assets/images/Subtract.png")}
                    />
                    <Text className=" text-white text-center absolute top-5 left-[17px] ">
                      {item}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        {/**Stipe2 design */}
        <View className=" -z-10 rotate-[10deg] absolute bottom-16">
          <FlatList
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            horizontal
            contentContainerClassName="-left-1"
            data={["Hair Style", "Makeup", "Beauty", "HairStyle", "Facial"]}
            renderItem={({ item }) => {
              return (
                <View>
                  <View className="relative">
                    <Image
                      className="-ml-[5px]"
                      source={require("../assets/images/Subtract2.png")}
                    />
                    <Text className=" text-[#678593] text-center absolute top-5 left-[17px]">
                      {item}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      {/**lower part */}
      <View className="mx-auto mt-9">
        {/**progress circle */}
        <View className="flex-row justify-center gap-4">
          {" "}
          <View className="w-3 h-3 rounded-full bg-[#6759FF] "></View>
          <View className="w-3 h-3 rounded-full bg-[#6759FF] opacity-20 "></View>
          <View className="w-3 h-3 rounded-full bg-[#6759FF] opacity-20 "></View>
        </View>
        {/**title & description */}
        <View className="mt-8 px-10">
          {" "}
          <Text className="font-bold text-center text-3xl">
            Beauty Parlor At your home
          </Text>
        </View>
        <View>
          <Text className="text-[#535763] text-center px-3 mt-2">
            Get professional beauty parlour services at your home for a relaxing
            and luxurious experience.
          </Text>
        </View>
      </View>
      {/**Button */}
      <View className="mx-auto mt-10">
        <TouchableOpacity className="bg-[#6759FF] px-7 py-5 h-16 w-16 rounded-full">
          <Text className="text-white">{">"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
