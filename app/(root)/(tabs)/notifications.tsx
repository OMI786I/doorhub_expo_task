import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Notifications = () => {
  return (
    <SafeAreaView className="bg-[#f9f9f9] min-h-screen p-5">
      <ScrollView>
        <View className="bg-white justify-center pb-40 items-center min-h-full ">
          <Image
            className="mb-6"
            source={require("@/assets/images/bell.png")}
          ></Image>
          <Text className="font-bold text-3xl ">No Notifications!</Text>
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
