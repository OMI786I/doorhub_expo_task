import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { CustomHeader } from "@/component/CustomHeader";
import { AntDesign } from "@expo/vector-icons";

const UserProfile = () => {
  const header = CustomHeader({
    title: "Profile",
    button: "Edit Profile",
  });

  return (
    <SafeAreaView className="bg-[#f9f9f9] flex-1">
      <ScrollView className="flex-1">
        <View>{header}</View>

        {/* Profile Info */}
        <View className="items-center mt-8 bg-white p-6 w-[90%] rounded-2xl mx-auto shadow-md flex-row">
          <Image
            className="h-20 w-20 rounded-full mb-4"
            source={{ uri: "https://i.ibb.co/nqpJrWtt/avatar.jpg" }}
          />
          <View>
            {" "}
            <Text className="text-2xl font-bold text-black">
              Tahid Sohrawardy Omi
            </Text>
            <Text className="text-gray-500 text-sm">
              sohrawardy1998@gmail.com
            </Text>
          </View>
        </View>

        {/* User Details Form */}
        <View className="mt-8 bg-white p-6 w-[90%] rounded-2xl mx-auto shadow-md">
          {/* Phone Number */}
          <View className="mb-5">
            <Text className="text-lg font-semibold mb-2">Phone Number</Text>
            <View className="flex-row items-center bg-[#F5F5F5] p-4 rounded-2xl">
              <TextInput
                className="flex-1 text-lg"
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                value={"01740987587"}
                editable={false}
              />
            </View>
          </View>

          {/* Last Name */}
          <View className="mb-5">
            <Text className="text-lg font-semibold mb-2">E-Mail</Text>
            <View className="bg-[#F5F5F5] p-4 rounded-2xl">
              <TextInput
                className="text-lg"
                placeholder="Last name"
                placeholderTextColor={"#D1D3D4"}
                value={"sohrawardy147@gmail.com"}
                editable={false}
              />
            </View>
          </View>

          {/* Gender */}
          <View className="mb-5">
            <Text className="text-lg font-semibold mb-2">Gender</Text>
            <View className="bg-[#F5F5F5] p-4 rounded-2xl">
              <TextInput
                className="text-lg"
                placeholder="Gender"
                placeholderTextColor={"#D1D3D4"}
                value={"Male"}
                editable={false}
              />
            </View>
          </View>

          {/* Birth Date */}
          <View>
            <Text className="text-lg font-semibold mb-2">Birth Date</Text>
            <View className="bg-[#F5F5F5] p-4 rounded-2xl">
              <TextInput
                className="text-lg"
                placeholder="Birth Date"
                placeholderTextColor={"#D1D3D4"}
                value={"15 Aug 1998"}
                editable={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
