import { ThemeContext } from "@/app/Context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import images from "@/constants/images";
import Search from "@/component/Search";
import AntDesign from "@expo/vector-icons/AntDesign";
import Category from "@/component/Category";

export default function HomeScreen() {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000"); // Default text color
  const { isDark } = useContext(ThemeContext);
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
    <ScrollView
      className={isDark ? "bg-[#0f1621] flex-1" : "bg-[#f9f9f9] flex-1 "}
    >
      {/**top part */}
      <View className="bg-[#ffffff] rounded-xl w-[91%] mx-auto p-8 mt-6">
        <Text className="text-lg text-[#666c89]">HELLO OMI 👋</Text>
        <Text className="text-[#172b4d] text-4xl font-bold">
          What you are looking for today
        </Text>
        <Search />
      </View>
      {/**category */}

      <View className="bg-[#ffffff] rounded-xl w-[91%] mx-auto p-8 mt-6 ">
        <View className="flex-row justify-between">
          <TouchableOpacity>
            <Image source={images.category1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.category2} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.category3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.seeAll} />
          </TouchableOpacity>
        </View>
      </View>
      {/**services:cleaning */}

      <View className="bg-[#ffffff] rounded-xl w-[91%] mx-auto py-8 px-5 mt-6 ">
        <View className="flex-col">
          <View className=" flex-row justify-between">
            <View className="flex-row items-center">
              <View
                style={{
                  width: 4,
                  height: 20,
                  backgroundColor: "#CABDFF",
                  marginRight: 10,
                  borderRadius: 20,
                }}
              />
              {/* Title */}
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: defaultTextColor,
                }}
              >
                Cleaning Services
              </Text>
            </View>

            <TouchableOpacity className="flex-row items-center gap-1 border border-[#EFEFEF] py-3 px-5 rounded-full">
              <Text className="text-[#6F767E]">See All</Text>
              <AntDesign name="right" size={13} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Category />
      </View>
    </ScrollView>
  );
}
