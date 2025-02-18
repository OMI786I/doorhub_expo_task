import { ThemeContext } from "@/app/Context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import images from "@/constants/images";
import Search from "@/component/Search";
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
    <View className={isDark ? "bg-[#0f1621] flex-1" : "bg-[#f9f9f9] flex-1 "}>
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
            {" "}
            <Image source={images.category1} />
          </TouchableOpacity>
          <TouchableOpacity>
            {" "}
            <Image source={images.category2} />
          </TouchableOpacity>
          <TouchableOpacity>
            {" "}
            <Image source={images.category3} />
          </TouchableOpacity>
          <TouchableOpacity>
            {" "}
            <Image source={images.seeAll} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
