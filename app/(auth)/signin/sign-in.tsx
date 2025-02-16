import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import CountryPicker from "react-native-country-picker-modal";
import logo from "@/assets/images/Logo.png";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { ThemeContext } from "@/app/Context/ThemeContext";
const Signin = () => {
  const [countryCode, setCountryCode] = useState("US");
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const router = useRouter();
  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  useEffect(() => {
    const enteredPhone = country?.callingCode[0] + phoneNumber;
    console.log("entered phone", enteredPhone);
  }, [phoneNumber, country]);

  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000"); // Default text color
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621"); // Dark theme background color
      setDefaultTextColor("#ffffff"); // Dark theme text color
    } else {
      setDefaultColor("#f9f9f9"); // Light theme background color
      setDefaultTextColor("#000000"); // Light theme text color
    }
  }, [isDark]);

  return (
    <SafeAreaView style={{ backgroundColor: defaultColor }}>
      <ScrollView>
        <View className="items-center justify-center mt-24">
          <Image source={logo} />
        </View>
        <View className="mt-20 px-4">
          <Text className={isDark ? "text-4xl text-white" : "text-4xl"}>
            Sign in
          </Text>
          {/**input phone number */}
          <View className="mt-7">
            <Text className={isDark ? "text-xl text-white" : "text-xl"}>
              Phone Number
            </Text>
            <View
              className={
                isDark
                  ? "flex-row items-center mt-2 bg-[#18202e] p-3 rounded-2xl"
                  : "flex-row items-center mt-2 bg-[#F5F5F5] p-3 rounded-2xl"
              }
            >
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
                placeholderTextColor={"#D1D3D4"}
                className="flex-1 ml-2  rounded-lg px-3 py-2"
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => router.push("/verification/verification")}
              className={
                isDark
                  ? "p-5 bg-[#2f3643] mt-6 rounded-2xl"
                  : `p-5 bg-[#efefef] mt-6 rounded-2xl`
              }
            >
              <Text
                className={
                  isDark
                    ? `text-center text-xl font-bold text-white`
                    : `text-center text-xl font-bold text-black`
                }
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/**socials */}
        <View className="mt-14">
          <Text
            className={
              isDark
                ? "text-center text-xl text-white"
                : `text-center text-xl text-black`
            }
          >
            Sign in with
          </Text>
          <View className="flex-row justify-center items-center gap-5 mt-6">
            <TouchableOpacity className="border px-2 py-2 rounded-2xl border-gray-400 ">
              <FontAwesome5 name="facebook" size={34} color="#1977f3" />
            </TouchableOpacity>
            <TouchableOpacity className="border p-2 rounded-2xl border-gray-400">
              <Image
                source={require("@/assets/images/google.png")}
                className="w-8 p-5"
              />
            </TouchableOpacity>
            <TouchableOpacity className="border px-4 py-2 rounded-2xl border-gray-400">
              <FontAwesome5
                name="apple"
                size={34}
                color={isDark ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/**bottom parts */}
        <View className="mt-7 justify-center items-center">
          <TouchableOpacity
            onPress={() => router.push("/verification/verification")}
            className={
              isDark
                ? `p-5 justify-center items-center bg-[#29303c] border rounded-2xl border-gray-200 w-3/4`
                : `p-5 justify-center items-center bg-[#fcfcfc] border rounded-2xl border-gray-200 w-3/4`
            }
          >
            <Text
              className={
                isDark
                  ? "text-center text-lg font-bold text-white"
                  : "text-center text-lg font-bold"
              }
            >
              Continue as a Guest
            </Text>
          </TouchableOpacity>
          <View className="flex-row gap-2 p-4">
            <Text className="text-[#9A9FA5]">Create a New Account?</Text>
            <Text
              className="text-blue-700 font-bold"
              onPress={() => router.push("/signup/signup")}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
