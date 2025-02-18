import { Slot, Redirect, useRouter, Tabs, useNavigation } from "expo-router";
import { useState, useEffect, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { CustomHeader } from "@/component/CustomHeader";
import { DrawerActions } from "@react-navigation/native";
import { ThemeContext } from "@/app/Context/ThemeContext";
export default function AppLayout() {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000"); // Default text color
  const [defaultNavTextColor, setDefaultNavTextColor] = useState("#18202e"); // Default text color
  const { isDark } = useContext(ThemeContext);
  const [defaultNavBackgroundColor, setDefaultNavBackgroundColor] =
    useState("white");
  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621"); // Dark theme background color
      setDefaultTextColor("#ffffff"); // Dark theme text color
      setDefaultNavTextColor("#18202e"); // Dark theme text color
      setDefaultNavBackgroundColor("#18202e");
    } else {
      setDefaultColor("#f9f9f9"); // Light theme background color
      setDefaultTextColor("#000000"); // Light theme text color
      setDefaultNavTextColor("#f9f9f9"); // Light theme text color
      setDefaultNavBackgroundColor("#ffffff");
    }
  }, [isDark]);

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
        tabBarStyle: {
          backgroundColor: defaultNavBackgroundColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // title: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: defaultColor,
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
            backgroundColor: defaultColor,
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
            backgroundColor: defaultColor,
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
