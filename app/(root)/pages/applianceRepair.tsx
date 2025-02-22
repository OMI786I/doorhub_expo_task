import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomTitle from "@/component/CustomTitle";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Search from "@/component/Search";
import { data } from "@/constants/data";
import Fontisto from "@expo/vector-icons/Fontisto";
const applianceRepair = () => {
  const [activeFilterGrid, setActiveFilterGrid] = useState<boolean>(false);
  const [activeFilterList, setActiveFilterList] = useState<boolean>(true);

  console.log(activeFilterGrid, activeFilterList);

  return (
    <SafeAreaView className="flex-1">
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
      <View className="p-4 flex-1 ">
        <View className="bg-white  rounded-xl flex-1">
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
                <Fontisto
                  name="nav-icon-grid"
                  size={24}
                  color={activeFilterGrid ? "#6759ff" : "#9A9FA5"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-5 p-4 flex-1 ">
            <FlatList
              data={data || []}
              contentContainerStyle={{
                gap: 25,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => router.push(`/(root)/pages/${item.id}`)}
                >
                  <View className="flex-row items-center gap-6">
                    <View>
                      <Image source={item.image} />
                    </View>
                    <View>
                      <View className="flex-row items-center gap-1">
                        <AntDesign name="star" size={14} color={"#FFC554"} />
                        <Text className="font-bold">{item.rating}</Text>
                        <Text className="text-gray-500">(87)</Text>
                      </View>
                      <View>
                        <Text className="font-bold">{item.title}</Text>
                        <Text className="text-[#9A9FA5]  my-2">
                          Starts From
                        </Text>
                        <TouchableOpacity className="p-1  bg-[#B5E4CA] w-[50%]">
                          <Text className="font-bold text-center">
                            ${item.money}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default applianceRepair;
