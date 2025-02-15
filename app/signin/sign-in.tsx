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
import logo from "@/assets/images/Logo.png";

const Signin = () => {
  const [countryCode, setCountryCode] = useState("US");
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  useEffect(() => {
    const enteredPhone = country?.callingCode[0] + phoneNumber;
    console.log("entered phone", enteredPhone);
  }, [phoneNumber, country]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center justify-center mt-24">
          <Image source={logo} />
        </View>
        <View className="mt-20 px-4">
          <Text className="text-4xl">Sign in</Text>
          {/**input phone number */}
          <View className="mt-7">
            <Text className="text-xl">Phone Number</Text>
            <View className="flex-row items-center mt-2 bg-[##F5F5F5]">
              <TouchableOpacity
                onPress={() => setIsCountryPickerVisible(true)}
                className="flex-row items-center "
              >
                <View className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 justify-center items-center">
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
