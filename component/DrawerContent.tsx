import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";

import { useRouter } from "expo-router";
import { ThemeContext } from "@/app/Context/ThemeContext";

interface MenuItem {
  id: string;
  title: string;
  icons: ReactNode;
  link: string;
}
const data: MenuItem[] = [
  {
    id: "1",
    title: "Calender",
    icons: <AntDesign name="carryout" size={28} color="white" />,
    link: "/",
  },
  {
    id: "2",
    title: "Payment Methods",
    icons: <AntDesign name="creditcard" size={24} color="white" />,
    link: "/",
  },
  {
    id: "3",
    title: "Address",
    icons: <FontAwesome5 name="map-marker-alt" size={24} color="white" />,
    link: "/",
  },
  {
    id: "4",
    title: "Notifications",
    icons: <AntDesign name="bells" size={24} color="white" />,
    link: "/",
  },
  {
    id: "5",
    title: "Offers",
    icons: <Fontisto name="shopping-sale" size={24} color="white" />,
    link: "/",
  },
  {
    id: "6",
    title: "Promo",
    icons: <AntDesign name="carryout" size={24} color="white" />,
    link: "/",
  },

  {
    id: "7",
    title: "Refer a friend",
    icons: <Feather name="users" size={24} color="white" />,
    link: "/",
  },
  {
    id: "8",
    title: "Support",
    icons: <Feather name="phone-call" size={24} color="white" />,
    link: "/",
  },
];
export const DrawerContent = ({ navigation }: any) => {
  const [defaultColor, setDefaultColor] = useState("#6759ff");
  const [defaultbgColor, setDefaultbgColor] = useState("#6759ff");
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  console.log(isDark);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };
  useEffect(() => {
    if (isDark) {
      setDefaultColor("#18202e");
      setDefaultbgColor("#2f3643");
      setIsChecked(true);
    } else {
      setDefaultColor("#6759ff");
      setDefaultbgColor("#7e72ff");
    }
  }, [isDark]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[defaultColor, defaultColor]}
        style={{ flex: 1, minHeight: "100%", padding: 30 }}
      >
        {/* Menu Items */}
        <FlatList
          ListHeaderComponent={
            <View className="flex-row items-center mb-6">
              {/* User Profile Section */}
              <Image
                className="h-16 w-16 rounded-full mr-4"
                source={{ uri: "https://i.ibb.co/nqpJrWtt/avatar.jpg" }}
              />
              <View>
                <View className="flex-row items-center gap-1">
                  <Text className="text-xl font-bold text-white">
                    Tahid Sohrawardy Omi
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/(root)/(drawer)/user/user")}
                  >
                    <AntDesign name="edit" size={20} color="white" />
                  </TouchableOpacity>
                </View>
                <Text className="text-gray-200">sohrawardy1998@gmail.com</Text>
              </View>
            </View>
          }
          ListFooterComponentStyle={{
            flex: 1,

            justifyContent: "flex-end",
          }}
          ListFooterComponent={
            <View>
              <View className="flex-row items-center gap-2 border-t-2 border-white p-5">
                <AntDesign name="questioncircleo" size={24} color="white" />
                <Text className="text-white">Color Scheme</Text>
              </View>
              <View
                className={`flex-row items-center justify-center bg-[${defaultbgColor}] rounded-full p-1 shadow`}
              >
                <TouchableOpacity
                  className={`flex-row gap-1 items-center justify-center rounded-full py-2 px-4 ${
                    !isChecked ? "bg-blue-100" : "bg-transparent"
                  }`}
                  onPress={handleCheckboxChange}
                >
                  <Fontisto name="day-sunny" size={24} color="black" />
                  <Text
                    className={`text-sm font-medium ${
                      !isChecked ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    Light Mode
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className={`flex-row items-center rounded-full py-2 px-4 ${
                    isChecked ? "bg-blue-100" : "bg-transparent"
                  }`}
                  onPress={handleCheckboxChange}
                >
                  <FontAwesome5 name="moon" size={24} color="black" />
                  <Text
                    className={`text-sm font-medium ${
                      isChecked ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    Dark Mode
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => {
            return (
              <View className=" my-2 ">
                <TouchableOpacity className="flex-row gap-2">
                  {item.icons}
                  <Text className="text-white"> {item.title}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </LinearGradient>
    </View>
  );
};
