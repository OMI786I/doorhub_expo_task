import { ThemeContext } from "@/app/Context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

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
    <View className={isDark ? "bg-[#0f1621] flex-1" : "bg-[#f9f9f9] flex-1"}>
      <Text className={isDark ? "text-[#ffffff]" : `text-[#000000]`}>
        Home Screen
      </Text>
    </View>
  );
}
