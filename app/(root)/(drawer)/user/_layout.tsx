import { CustomHeader } from "@/component/CustomHeader";
import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function Layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={{ padding: 10 }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
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
          headerShown: true,
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
}
