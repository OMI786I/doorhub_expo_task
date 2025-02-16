import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { ThemeContext } from "../Context/ThemeContext";

const Verification = () => {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000");
  const [inputBgColor, setInputBgColor] = useState("#efefef");
  const [buttonBgColor, setButtonBgColor] = useState("#efefef");
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621");
      setDefaultTextColor("#ffffff");
      setInputBgColor("#1e293b");
      setButtonBgColor("#374151");
    } else {
      setDefaultColor("#f9f9f9");
      setDefaultTextColor("#000000");
      setInputBgColor("#efefef");
      setButtonBgColor("#efefef");
    }
  }, [isDark]);

  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: defaultColor, flex: 1 }}>
      <View style={{ padding: 24, justifyContent: "center", marginTop: 160 }}>
        <Text
          style={{ fontWeight: "bold", fontSize: 32, color: defaultTextColor }}
        >
          Verification Code
        </Text>
        <Text style={{ marginTop: 16, color: "#535763" }}>
          We just sent you a verification code. Check your inbox.
        </Text>
        {/** Input section */}
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              keyboardType="numeric"
              style={{
                width: 64,
                height: 80,
                borderRadius: 16,
                textAlign: "center",
                backgroundColor: inputBgColor,
                color: defaultTextColor,
                fontSize: 24,
              }}
            />
          ))}
        </View>
        {/** Button */}
        <TouchableOpacity
          style={{
            marginTop: 64,
            padding: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: buttonBgColor,
            borderRadius: 16,
          }}
          onPress={() => router.push("/")}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: defaultTextColor,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        {/** Timer */}
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 48,
          }}
        >
          <Text style={{ color: defaultTextColor }}>Re-send code in</Text>
          <Text style={{ color: "#6759ff" }}>0:20</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
