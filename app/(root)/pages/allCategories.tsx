import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Search from "@/component/Search";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const allCategories = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-[#ffffff] p-2">
      <View className="  w-[90%]   mx-auto flex-row justify-center items-center bg-[#fbfbfb] rounded-xl">
        <TouchableOpacity className="ml-2" onPress={() => router.back()}>
          <AntDesign name="left" size={24} />
        </TouchableOpacity>

        <View className="w-[80%] mx-auto">
          <Search />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default allCategories;
