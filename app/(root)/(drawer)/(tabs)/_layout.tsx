import { Slot, Redirect, useRouter, Tabs, useNavigation } from "expo-router";
import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { CustomHeader } from "@/component/CustomHeader";
import { DrawerActions } from "@react-navigation/native";
export default function AppLayout() {
  const [user, setUser] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();
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
        tabBarShowLabel: false,
        tabBarPosition: "top",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // title: "Home",
          tabBarShowLabel: false,
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
          headerTitle: () => (
            <CustomHeader title="Notifications" button="Recent" icon="down" />
          ),
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
        listeners={{
          tabPress: (e) => {
            // Prevent default navigation to the settings page
            e.preventDefault();
            // Open the drawer
            navigation.dispatch(DrawerActions.openDrawer());
          },
        }}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={28} name="equals" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
