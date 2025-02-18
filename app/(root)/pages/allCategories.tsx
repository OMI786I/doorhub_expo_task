import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Search from "@/component/Search";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CustomTitle from "@/component/CustomTitle";
import icons from "@/constants/icons";
interface Data {
  title: string;
  image: ImageSourcePropType;
}

const allCategories = () => {
  const data: Data[] = [
    {
      title: "AC Repair",
      image: icons.icon1,
    },
    {
      title: "Beauty",
      image: icons.icon2,
    },
    {
      title: "Appliances",
      image: icons.icon3,
    },
    {
      title: "AC Repair",
      image: icons.icon4,
    },
    {
      title: "Painting",
      image: icons.icon5,
    },
    {
      title: "Cleaning",
      image: icons.icon6,
    },
    {
      title: "Plumbing",
      image: icons.icon7,
    },
    {
      title: "Electronics",
      image: icons.icon8,
    },
    {
      title: "Cleaning",
      image: icons.icon9,
    },
  ];

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
            <CustomTitle title="All Categories" showButton={false} />
          </View>
          <View className="mt-5 ">
            <FlatList
              numColumns={3}
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 10,
                gap: 20,
              }}
              columnWrapperStyle={{
                justifyContent: "space-between",
                gap: 25,
              }}
              data={data}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <View>
                  <Image source={item.image} />
                  <Text className="text-center">{item.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default allCategories;
