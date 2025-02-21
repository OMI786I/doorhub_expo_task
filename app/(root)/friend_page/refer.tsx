import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import images from "@/constants/images";
const refer = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.back()} className="p-4 bg-white">
        <AntDesign name="left" size={24} />
      </TouchableOpacity>
      <View className="bg-white flex-col gap-2 justify-center p-4 h-[85%] w-[90%] mx-auto mt-2 rounded-xl  ">
        <View>
          <Image resizeMode="cover" source={images.referImage} />
        </View>
        <View className="justify-center  mt-9">
          <Text className="font-bold text-4xl text-center">
            Refer a Friend & Get 50% off
          </Text>
          <Text className="text-[#535763] mt-14">
            * Get 50% off upto $20 after your friend’s 1st order
          </Text>
          <Text className="text-[#535763] mt-2">
            * Your friend gets 50% off on their 1st order
          </Text>
        </View>
        <View className="justify-center items-center">
          <TouchableOpacity className="bg-[#6759FF] p-4 w-[50%] px-11 rounded-xl mt-9">
            <Text className="text-white text-center">Refer a friend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default refer;
