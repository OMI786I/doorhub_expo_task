import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const verification = () => {
  return (
    <SafeAreaView className="bg-white min-h-screen">
      <View className="p-6 justify-center mt-40">
        <Text className="font-bold text-4xl"> Verification Code</Text>
        <Text className="mt-4 text-[#535763]">
          We just send you a verify code. Check your inbox to get them{" "}
        </Text>
        {/**input section */}
        <View className="mt-10 flex-row justify-around">
          <TextInput
            keyboardType="numeric"
            className="w-16 rounded-2xl text-center h-20 bg-[#efefef]"
          />
          <TextInput
            keyboardType="numeric"
            className="w-16 rounded-2xl text-center h-20 bg-[#efefef]"
          />
          <TextInput
            keyboardType="numeric"
            className="w-16 rounded-2xl text-center h-20 bg-[#efefef]"
          />
          <TextInput
            keyboardType="numeric"
            className="w-16 rounded-2xl text-center h-20 bg-[#efefef]"
          />
        </View>
        {/**button */}
        <TouchableOpacity className="mt-16 p-5 justify-center items-center bg-[#efefef] rounded-2xl">
          <Text className="text-lg font-bold">Continue</Text>
        </TouchableOpacity>

        {/**timer */}
        <View className="flex-row  gap-2 justify-center items-center mt-12">
          <Text>Re-send code in</Text>
          <Text className="text-[#6759ff]">0:20</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default verification;
