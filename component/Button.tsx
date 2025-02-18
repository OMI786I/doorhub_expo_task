import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useRouter } from "expo-router";
import { ThemeContext } from "@/app/Context/ThemeContext";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className={
          isDark
            ? "p-5 bg-[#2f3643] mt-6 rounded-2xl"
            : `p-5 bg-[#efefef] mt-6 rounded-2xl`
        }
      >
        <Text
          className={
            isDark
              ? `text-center text-xl font-bold text-white`
              : `text-center text-xl font-bold text-black`
          }
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
