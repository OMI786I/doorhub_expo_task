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
import logo from "@/assets/images/logo_no_text.png";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { ThemeContext } from "@/app/Context/ThemeContext";

const Signup = () => {
  const [countryCode, setCountryCode] = useState<
    | "US"
    | "AF"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "AX"
  >("US");
  const [country, setCountry] = useState<{ callingCode: string[] } | null>(
    null
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();
  const [title, setTitle] = useState("Mr.");

  const { isDark } = useContext(ThemeContext);
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000");
  const [inputBackgroundColor, setInputBackgroundColor] = useState("#F5F5F5");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#efefef");

  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621"); // Dark theme background color
      setDefaultTextColor("#ffffff"); // Dark theme text color
      setInputBackgroundColor("#1E293B"); // Dark theme input background
      setButtonBackgroundColor("#334155"); // Dark theme button background
    } else {
      setDefaultColor("#f9f9f9"); // Light theme background color
      setDefaultTextColor("#000000"); // Light theme text color
      setInputBackgroundColor("#F5F5F5"); // Light theme input background
      setButtonBackgroundColor("#efefef"); // Light theme button background
    }
  }, [isDark]);

  const onSelectCountry = (country: any) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  useEffect(() => {
    const enteredPhone = country?.callingCode[0] + phoneNumber;
    console.log("entered phone", enteredPhone);
  }, [phoneNumber, country]);

  console.log("name", title + firstName + lastName);

  return (
    <SafeAreaView style={{ backgroundColor: defaultColor, flex: 1 }}>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 96,
          }}
        >
          <Image source={logo} />
        </View>
        <View style={{ marginTop: 80, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 32, color: defaultTextColor }}>Sign Up</Text>

          {/**input first name */}
          <View style={{ marginTop: 28 }}>
            <Text style={{ fontSize: 20, color: defaultTextColor }}>
              First Name
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
                backgroundColor: inputBackgroundColor,
                padding: 12,
                borderRadius: 16,
                position: "relative",
              }}
            >
              <Text
                style={{
                  zIndex: 10,
                  position: "absolute",
                  color: defaultTextColor,
                  left: 14,
                }}
              >
                {title}
              </Text>
              <Picker
                selectedValue={title}
                onValueChange={(itemValue) => setTitle(itemValue)}
                style={{
                  backgroundColor: inputBackgroundColor,
                  flex: 0.2,
                  color: inputBackgroundColor,
                }}
                dropdownIconColor={isDark ? "#ffffff" : "#000000"}
              >
                <Picker.Item label="Mr." value="Mr." />
                <Picker.Item label="Ms." value="Ms." />
              </Picker>

              <TextInput
                placeholderTextColor={"#D1D3D4"}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                  color: defaultTextColor,
                }}
                placeholder="First name"
                onChangeText={setFirstName}
              />
            </View>
          </View>

          {/**input last name */}
          <View style={{ marginTop: 28 }}>
            <Text style={{ fontSize: 20, color: defaultTextColor }}>
              Last Name
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
                backgroundColor: inputBackgroundColor,
                padding: 12,
                borderRadius: 16,
              }}
            >
              <TextInput
                placeholderTextColor={"#D1D3D4"}
                style={{
                  flex: 1,
                  marginLeft: 8,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  color: defaultTextColor,
                }}
                placeholder="Last name"
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/**input phone number */}
          <View style={{ marginTop: 28 }}>
            <Text style={{ fontSize: 20, color: defaultTextColor }}>
              Phone Number
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
                backgroundColor: inputBackgroundColor,
                padding: 12,
                borderRadius: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => setIsCountryPickerVisible(true)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                  <Text style={{ marginLeft: 8, color: defaultTextColor }}>
                    {`+${country.callingCode[0]}`}
                  </Text>
                )}
              </TouchableOpacity>
              <TextInput
                style={{
                  flex: 1,
                  marginLeft: 8,
                  borderRadius: 8,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  color: defaultTextColor,
                }}
                placeholder="Enter your phone number"
                placeholderTextColor={"#D1D3D4"}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: buttonBackgroundColor,
                marginTop: 24,
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: defaultTextColor,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/**bottom parts */}
        <View
          style={{
            marginTop: 28,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 8, padding: 16 }}>
            <Text style={{ color: "#9A9FA5" }}>Create a New Account?</Text>
            <Text
              style={{ color: "#3B82F6", fontWeight: "bold" }}
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

export default Signup;
