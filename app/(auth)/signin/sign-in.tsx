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
import CountryPicker, {
  CountryCode,
  DARK_THEME,
} from "react-native-country-picker-modal";
import images from "@/constants/images";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { ThemeContext } from "@/app/Context/ThemeContext";
import Button from "@/component/Button";
const Signin = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [country, setCountry] = useState<{ [key: string]: string }>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const router = useRouter();
  const onSelectCountry = (country: any) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  useEffect(() => {
    const enteredPhone = country?.callingCode?.[0] ?? "" + phoneNumber;

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

  const handleSignin = () => {
    router.push("/verification/verification");
  };

  return (
    <SafeAreaView style={{ backgroundColor: defaultColor }}>
      <ScrollView>
        <View className="items-center justify-center mt-24">
          <Image source={images.logo} />
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
                    withFilter={true}
                    withFlag={true}
                    withCountryNameButton={false}
                    withAlphaFilter={true}
                    withCallingCode={true}
                    onSelect={onSelectCountry}
                    visible={isCountryPickerVisible}
                    onClose={() => setIsCountryPickerVisible(false)}
                    countryCode={countryCode}
                    withEmoji={false}
                    containerButtonStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                    theme={isDark ? DARK_THEME : undefined}
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
          {/**button */}
          <Button title="Sign in" onPress={handleSignin} />
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
              <Image source={images.googleLogo} className="w-8 p-5" />
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
