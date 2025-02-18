import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ColorValue,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

// Define Offer Data Type
interface Data {
  title: string;
  offerValue: number;
  background: ColorValue;
}

const Offer = () => {
  // Offer Data
  const data: Data[] = [
    { title: "Offer AC Service", offerValue: 25, background: "#eaf6ef" },
    { title: "Offer Cleaning Service", offerValue: 30, background: "#ffbc99" },
  ];

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }} // Extra padding
        showsHorizontalScrollIndicator={false} // Hide scroll bar
        renderItem={({ item }) => (
          <View
            style={{ backgroundColor: item.background }}
            className="py-8 px-10 rounded-2xl mr-6 w-80 h-60"
          >
            {/* Title */}
            <View className="flex-row items-center gap-2 mb-4">
              <Text className="text-lg font-semibold">{item.title}</Text>
              <AntDesign name="exclamationcircle" size={18} color="black" />
            </View>

            {/* Offer Percentage */}
            <Text className="text-5xl font-extrabold text-[#000000]">
              GET {item.offerValue}%
            </Text>

            {/* Grab Offer Button */}
            <TouchableOpacity
              className={
                "flex-row items-center px-1 bg-[#ffffff] justify-center py-2 border border-[#6A9B7E] w-44 rounded-full mt-6"
              }
            >
              <Text className="text-[#6A9B7E] font-semibold text-lg mr-2">
                Grab Offer
              </Text>
              <AntDesign name="right" size={18} color="#6A9B7E" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Offer;
