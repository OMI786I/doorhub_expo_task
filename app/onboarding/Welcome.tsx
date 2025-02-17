import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import image1 from "@/assets/images/welcome_image_1.png";
import image2 from "@/assets/images/welcome_image_2.png";
import image3 from "@/assets/images/welcome_image_3.png";
import stringImg1 from "@/assets/images/Subtract1.png";
import stringImg2 from "@/assets/images/Subtract3.png";
import stringImg3 from "@/assets/images/Subtract4.png";

import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ThemeContext } from "../Context/ThemeContext";

const Welcome = () => {
  const router = useRouter();
  const [showData, setShowData] = useState(1);
  const [renderData, setRenderData] = useState<Data[]>([]);

  interface Data {
    id: number;
    image: any;
    title: string;
    description: string;
    slogan: string[];
    stripeImage: any;
  }

  const data: Data[] = [
    {
      id: 1,
      image: image1,
      title: "Beauty parlour at your home",
      description:
        "Get professional beauty parlour services at your home for a relaxing and luxurious experience.",
      slogan: ["Hair Style", "Makeup", "Beauty", "HairStyle", "Facial"],
      stripeImage: stringImg1,
    },
    {
      id: 2,
      image: image2,
      title: " Plumber & exprt nearby you",
      description:
        "Find expert plumbers near you for quick and reliable services.",
      slogan: ["Help", "Plumbing", "Repair", "Service", "install"],
      stripeImage: stringImg2,
    },
    {
      id: 3,
      image: image3,
      title: " Professional home cleaning",
      description:
        "Expert home cleaning services for a spotless and refreshed living space.",
      slogan: ["Mop", "Home", "Cleaning", "Kitchen", "Carpet"],
      stripeImage: stringImg3,
    },
  ];

  useEffect(() => {
    const toShowData = data.filter((item) => item.id === showData);
    setRenderData(toShowData);
  }, [showData]);

  const handleNextPage = () => {
    setShowData(showData + 1);
    if (showData >= 3) {
      setShowData(1);
    }
  };

  const { isDark } = useContext(ThemeContext);
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000");

  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621"); // Dark theme background color
      setDefaultTextColor("#ffffff"); // Dark theme text color
    } else {
      setDefaultColor("#f9f9f9"); // Light theme background color
      setDefaultTextColor("#000000"); // Light theme text color
    }
  }, [isDark]);

  return (
    <SafeAreaView style={{ backgroundColor: defaultColor, flex: 1 }}>
      {/**top part */}
      <View className="relative">
        <View className="items-end p-6">
          <TouchableOpacity
            onPress={() => router.push("/signin/sign-in")}
            className="bg-[#B5EBCD] p-2 rounded-3xl w-[15%]"
          >
            <Text className="text-center">Skip</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-[#FFCACA] w-[80] h-[80] rounded-full absolute -left-10 -top-7"></View>
      </View>

      {renderData.map((item) => (
        <View key={item.id}>
          {/**middle part */}
          <View className="relative">
            <View className="w-[193.54px] h-[382.85px] mx-auto justify-center rounded-3xl relative">
              <View className="bg-[#CABDFF] rounded-full pt-6 h-[80%] w-full mx-auto"></View>
              <Image
                source={item.image}
                className="w-full h-[95%] rounded-full absolute overflow-hidden"
                resizeMode="cover"
              />
            </View>
            {/**Stripe design */}

            <View className="-rotate-[10deg] flex-row absolute bottom-16">
              {item?.slogan?.map((res: string, index: number) => (
                <View className="relative " key={index}>
                  <Image className="-ml-[5px]" source={item.stripeImage} />
                  <Text className="text-[#ffffff] text-center absolute top-5 left-3 ">
                    {res}
                  </Text>
                </View>
              ))}
            </View>

            {/**Stripe2 design */}
            <View className="-z-10 flex-row rotate-[10deg] absolute bottom-16">
              {item?.slogan?.map((res: string, index: number) => (
                <View className="relative" key={index}>
                  <Image
                    className="-ml-[5px]"
                    source={require("@/assets/images/Subtract2.png")}
                  />
                  <Text className="text-[#678593] text-center absolute top-5 left-[17px]">
                    {res}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {/**lower part */}
          <View className="mx-auto mt-9">
            {/**progress circle */}
            <View className="flex-row justify-center gap-4">
              {data.map((item) => (
                <View
                  key={item.id}
                  className={`w-3 h-3 rounded-full ${
                    item.id === showData
                      ? "bg-[#6759FF]"
                      : "bg-[#6759FF] opacity-20"
                  }`}
                />
              ))}
            </View>
            {/**title & description */}
            <View className="mt-8 px-10">
              <Text
                style={{ color: defaultTextColor }}
                className="font-bold text-center text-3xl"
              >
                {item.title}
              </Text>
            </View>
            <View>
              <Text
                style={{ color: defaultTextColor }}
                className="text-center px-3 mt-2"
              >
                {item.description}
              </Text>
            </View>
          </View>
          {/**Button */}
          {showData === 3 ? (
            <View className="mx-auto mt-10">
              <TouchableOpacity
                onPress={() => router.push("/signin/sign-in")}
                className="p-4 px-12 rounded-xl bg-[#6759ff]"
              >
                <Text className="text-white">Get Started</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="mx-auto mt-10">
              <TouchableOpacity
                onPress={() => handleNextPage()}
                className="rounded-full bg-[#6759FF] p-4"
              >
                <Text>
                  <AntDesign name="right" size={24} color="white" />
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Welcome;
