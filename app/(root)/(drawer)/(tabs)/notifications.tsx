import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ThemeContext } from "@/app/Context/ThemeContext";

const Notifications = () => {
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
    <SafeAreaView className={`bg-[${defaultColor}] min-h-screen p-5`}>
      <ScrollView>
        <View className="justify-center pb-40 items-center min-h-full ">
          <Image
            className="mb-6"
            source={require("@/assets/images/bell.png")}
          ></Image>
          <Text className={`font-bold text-3xl text-[${defaultTextColor}] `}>
            No Notifications!
          </Text>
          <Text className="text-[#b0b0b0] mt-6">
            You don't have any notification yet. Please place order
          </Text>
          <TouchableOpacity className="bg-[#6759ff] p-5 rounded-xl mt-14">
            <Text className="text-white">View all Services</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
