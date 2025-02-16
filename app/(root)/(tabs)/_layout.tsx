import { Slot, Redirect, useRouter, Tabs } from "expo-router";
import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { CustomHeader } from "@/component/CustomHeader";
export default function AppLayout() {
  const [user, setUser] = useState(false);
  const router = useRouter();

  useFocusEffect(() => {
    if (!user && router.canGoBack()) {
      setUser(true);
    }
  });

  return !user ? (
    <Redirect href={"/onboarding/Welcome"} />
  ) : (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",

        tabBarPosition: "top",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // title: "Home",
          headerTitle: () => <CustomHeader title="Home" />,
          headerStyle: {
            backgroundColor: "#f9f9f9",
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          headerTitle: () => <CustomHeader title="Bookings" />,

          headerStyle: {
            backgroundColor: "#f9f9f9",
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="filetext1" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          headerTitle: () => <CustomHeader title="Notifications" />,
          headerStyle: {
            backgroundColor: "#f9f9f9",
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="bells" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={28} name="equals" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
