import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface CustomTitleProps {
  title: string;
  showButton: boolean;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ title, showButton }) => {
  return (
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
          }}
        >
          {title}
        </Text>
      </View>
      <TouchableOpacity
        className={
          showButton
            ? "flex-row items-center gap-1 border border-[#EFEFEF] py-3 px-5 rounded-full"
            : "hidden"
        }
      >
        <Text className="text-[#6F767E]">See All</Text>
        <AntDesign name="right" size={13} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTitle;
