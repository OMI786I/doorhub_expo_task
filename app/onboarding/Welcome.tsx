import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ThemeContext } from "../Context/ThemeContext";
import images from "@/constants/images";
import GestureRecognizer from "react-native-swipe-gestures";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
      image: images.onboarding1,
      title: "Beauty parlour at your home",
      description:
        "Get professional beauty parlour services at your home for a relaxing and luxurious experience.",
      slogan: ["Hair Style", "Makeup", "Beauty", "HairStyle", "Facial"],
      stripeImage: images.stripe1,
    },
    {
      id: 2,
      image: images.onboarding2,
      title: "Plumber & expert nearby you",
      description:
        "Find expert plumbers near you for quick and reliable services.",
      slogan: ["Help", "Plumbing", "Repair", "Service", "Install"],
      stripeImage: images.stripe3,
    },
    {
      id: 3,
      image: images.onboarding3,
      title: "Professional home cleaning",
      description:
        "Expert home cleaning services for a spotless and refreshed living space.",
      slogan: ["Mop", "Home", "Cleaning", "Kitchen", "Carpet"],
      stripeImage: images.stripe4,
    },
  ];

  useEffect(() => {
    const toShowData = data.filter((item) => item.id === showData);
    setRenderData(toShowData);
  }, [showData]);

  const handleNextPage = () => {
    setShowData((prev) => (prev >= 3 ? 1 : prev + 1));
  };

  const handlePrevPage = () => {
    setShowData((prev) => (prev <= 1 ? 3 : prev - 1));
  };

  const { isDark } = useContext(ThemeContext);
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000");

  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621");
      setDefaultTextColor("#ffffff");
    } else {
      setDefaultColor("#f9f9f9");
      setDefaultTextColor("#000000");
    }
  }, [isDark]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureRecognizer
        onSwipeLeft={handleNextPage}
        onSwipeRight={handlePrevPage}
        config={{ velocityThreshold: 0.3, directionalOffsetThreshold: 80 }}
        style={{ flex: 1, backgroundColor: defaultColor }}
      >
        <SafeAreaView style={{ backgroundColor: defaultColor, flex: 1 }}>
          {/** Top Section */}
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
              {/** Middle Section */}
              <View className="relative">
                <View className="w-[193.54px] h-[382.85px] mx-auto justify-center rounded-3xl relative">
                  <View className="bg-[#CABDFF] rounded-full pt-6 h-[80%] w-full mx-auto"></View>
                  <Image
                    source={item.image}
                    className="w-full z-20 h-[95%] rounded-full absolute overflow-hidden"
                    resizeMode="cover"
                  />
                </View>

                {/** Stripe design */}
                <View className="z-20 -rotate-[10deg] flex-row absolute bottom-16">
                  {item?.slogan?.map((res, index) => (
                    <View className="relative" key={index}>
                      <Image className="-ml-[5px]" source={item.stripeImage} />
                      <Text className="text-[#ffffff] text-center absolute top-5 left-3">
                        {res}
                      </Text>
                    </View>
                  ))}
                </View>

                {/** Secondary Stripe */}
                <View className="z-10 flex-row rotate-[10deg] absolute bottom-16">
                  {item?.slogan?.map((res, index) => (
                    <View className="relative" key={index}>
                      <Image className="-ml-[5px]" source={images.stripe2} />
                      <Text className="text-[#678593] text-center absolute top-5 left-[17px]">
                        {res}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              {/** Lower Section */}
              <View className="mx-auto mt-9">
                {/** Progress Dots */}
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

                {/** Title & Description */}
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

              {/** Navigation Buttons */}
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
                    onPress={handleNextPage}
                    className="rounded-full bg-[#6759FF] p-4"
                  >
                    <AntDesign name="right" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </SafeAreaView>
      </GestureRecognizer>
    </GestureHandlerRootView>
  );
};

export default Welcome;
