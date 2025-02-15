import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import CountryPicker from "react-native-country-picker-modal";
import logo from "@/assets/images/logo_no_text.png";
import { Picker } from "@react-native-picker/picker";

import { useRouter } from "expo-router";
const signup = () => {
  const [countryCode, setCountryCode] = useState("US");
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();
  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const [title, setTitle] = useState("Mr.");

  useEffect(() => {
    const enteredPhone = country?.callingCode[0] + phoneNumber;
    console.log("entered phone", enteredPhone);
  }, [phoneNumber, country]);
  console.log("name", title + firstName + lastName);
  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <View className="items-center justify-center mt-24">
          <Image source={logo} />
        </View>
        <View className="mt-20 px-4">
          <Text className="text-4xl">Sign Up</Text>

          {/**input first name */}
          <View className="mt-7">
            <Text className="text-xl">First Name</Text>
            <View className="flex-row items-center mt-2 bg-[#F5F5F5] p-3 rounded-2xl">
              <Text className="flex-[0.1]">{title}</Text>
              <Picker
                selectedValue={title}
                onValueChange={(itemValue) => setTitle(itemValue)}
                style={{
                  backgroundColor: "#f5f5f5",
                  flex: 0.1,
                }}
              >
                <Picker.Item label="Mr." value="Mr." />

                <Picker.Item label="Ms." value="Ms." />
              </Picker>

              <TextInput
                placeholderTextColor={"#D1D3D4"}
                className="flex-1 ml-2   px-3 py-2"
                placeholder="First name"
                onChangeText={setFirstName}
              />
            </View>
          </View>

          {/**input last name */}
          <View className="mt-7">
            <Text className="text-xl">Last Name</Text>
            <View className="flex-row items-center mt-2 bg-[#F5F5F5] p-3 rounded-2xl">
              <TextInput
                className="flex-1 ml-2   px-3 py-2"
                placeholderTextColor={"#D1D3D4"}
                placeholder="Last name"
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/**input phone number */}
          <View className="mt-7">
            <Text className="text-xl">Phone Number</Text>
            <View className="flex-row items-center mt-2 bg-[#F5F5F5] p-3 rounded-2xl">
              <TouchableOpacity
                onPress={() => setIsCountryPickerVisible(true)}
                className="flex-row items-center "
              >
                <View className="w-10 h-10 rounded-full overflow-hidden  justify-center items-center">
                  <CountryPicker
                    withFilter
                    withFlag
                    withCountryNameButton={false}
                    withAlphaFilter
                    withCallingCode
                    withEmoji
                    onSelect={onSelectCountry}
                    visible={isCountryPickerVisible}
                    onClose={() => setIsCountryPickerVisible(false)}
                    countryCode={countryCode}
                    containerButtonStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                {country && (
                  <Text className="ml-2 ">{`+${country.callingCode[0]}`}</Text>
                )}
              </TouchableOpacity>
              <TextInput
                className="flex-1 ml-2  rounded-lg px-3 py-2"
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity className="p-5 bg-[#efefef] mt-6 rounded-2xl">
              <Text className="text-center text-xl font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/**bottom parts */}
        <View className="mt-7 justify-center items-center">
          <View className="flex-row gap-2 p-4">
            {" "}
            <Text className="text-[#9A9FA5]">Create a New Account?</Text>
            <Text
              className="text-blue-700 font-bold"
              onPress={() => router.push("/signin/sign-in")}
            >
              Sign In
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signup;
