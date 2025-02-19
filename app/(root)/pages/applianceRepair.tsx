import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import CustomTitle from "@/component/CustomTitle";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Search from "@/component/Search";
const applianceRepair = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="">
      {/**search bar header */}
      <View className="bg-white p-4 w-full">
        <View className="  w-[100%]   mx-auto flex-row justify-center items-center bg-[#fbfbfb] rounded-xl">
          <TouchableOpacity className="ml-2" onPress={() => router.back()}>
            <AntDesign name="left" size={24} />
          </TouchableOpacity>

          <View className="w-[80%] mx-auto">
            <Search />
          </View>
        </View>
      </View>

      {/**body */}
      <View className="p-4 ">
        <View className="bg-white min-h-[85%] rounded-xl">
          <View className="mt-6 p-4 rounded-xl ">
            <CustomTitle title="Appliance Repair" showButton={false} />
          </View>
          <View className="mt-5 "></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default applianceRepair;
