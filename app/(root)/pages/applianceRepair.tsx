import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomTitle from "@/component/CustomTitle";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Search from "@/component/Search";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const applianceRepair = () => {
  const [activeFilterGrid, setActiveFilterGrid] = useState<boolean>(false);
  const [activeFilterList, setActiveFilterList] = useState<boolean>(true);

  const router = useRouter();
  if (!MaterialIcons) {
    return <Text>Loading...</Text>;
  }
  console.log(activeFilterGrid, activeFilterList);

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
          <View className="mt-6 p-4 rounded-xl flex-row justify-between  ">
            <CustomTitle title="Appliance Repair" showButton={false} />
            <View className="flex-row gap-3">
              <TouchableOpacity
                className={
                  activeFilterList
                    ? "bg-[#ffffff] p-4 rounded-xl shadow-lg shadow-[#6759ff]"
                    : "bg-[#f7f7f7] p-4 rounded-xl"
                }
                onPress={() => setActiveFilterList(!activeFilterList)}
              >
                <AntDesign
                  name="bars"
                  size={24}
                  color={activeFilterList ? "#6759ff" : "#9A9FA5"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                className={
                  activeFilterGrid
                    ? "bg-[#ffffff] p-4 rounded-xl shadow-lg shadow-[#6759ff]"
                    : "bg-[#f7f7f7] p-4 rounded-xl"
                }
                onPress={() => setActiveFilterGrid(!activeFilterGrid)}
              >
                <MaterialIcons
                  name="grid-on"
                  size={24}
                  color={activeFilterGrid ? "#6759ff" : "#9A9FA5"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-5 "></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default applianceRepair;
