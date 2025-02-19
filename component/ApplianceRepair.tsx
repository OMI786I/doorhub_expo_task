import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/app/Context/ThemeContext";
import images from "@/constants/images";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const ApplianceRepair = () => {
  const { isDark } = useContext(ThemeContext);

  const [textColor, setTextColor] = useState("#ffffff");
  const router = useRouter();
  useEffect(() => {
    if (isDark) {
      setTextColor("#ffffff");
    } else {
      setTextColor("#000000");
    }
  }, [isDark]);

  return (
    <View>
      <View className="flex-row justify-between items-center">
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
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: textColor,
            }}
          >
            Appliance Repair
          </Text>
        </View>
      </View>
      <View className="my-5 relative overflow-hidden">
        <View className="bg-[#ECEAF6] w-full h-60"></View>

        <Image
          className="z-50 w-50 h-50  absolute top-14 -right-1"
          source={images.washingMachine}
          resizeMode="contain"
        />
        <View className="absolute z-50">
          <View className="py-8 px-4 rounded-2xl mr-6 w-80 h-60">
            {/* Title */}
            <View className="flex-row items-center gap-2 mb-4">
              <Text className="text-lg font-semibold">Offer Dry Cleaning</Text>
              <AntDesign name="exclamationcircle" size={18} color="black" />
            </View>

            {/* Offer Percentage */}
            <Text className="text-5xl font-extrabold text-[#000000]">
              GET 25%
            </Text>

            {/* Grab Offer Button */}
            <TouchableOpacity
              onPress={() => router.push("/(root)/pages/applianceRepair")}
              className={
                "flex-row items-center px-1 bg-[#ffffff] justify-center py-2 border border-[#A492EB] w-44 rounded-full mt-6"
              }
            >
              <Text className="text-[#A492EB] font-semibold text-lg mr-2">
                Grab Offer
              </Text>
              <AntDesign name="right" size={18} color="#6A9B7E" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ApplianceRepair;
