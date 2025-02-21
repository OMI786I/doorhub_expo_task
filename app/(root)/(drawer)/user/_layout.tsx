import { CustomHeader } from "@/component/CustomHeader";
import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/app/Context/ThemeContext";
export default function Layout() {
  const { isDark } = useContext(ThemeContext);
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000");
  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621"); // Dark theme background color
      setDefaultTextColor("#ffffff"); // Dark theme text color
    } else {
      setDefaultColor("#f9f9f9"); // Light theme background color
      setDefaultTextColor("#000000"); // Light theme text color
    }
  }, [isDark]);
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: defaultColor,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={{ padding: 10 }}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={isDark ? "white" : "black"}
            />
          </TouchableOpacity>
        ),
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitle: "Back",
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen
        name="user"
        options={{
          headerShown: false,
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
}
