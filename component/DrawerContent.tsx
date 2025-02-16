import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { ReactNode, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface MenuItem {
  title: string;
  icons: ReactNode;
  link: string;
}
const data: MenuItem[] = [
  {
    title: "Calender",
    icons: <AntDesign name="carryout" size={28} color="white" />,
    link: "/",
  },
  {
    title: "Payment Methods",
    icons: <AntDesign name="creditcard" size={24} color="white" />,
    link: "/",
  },
  {
    title: "Address",
    icons: <FontAwesome5 name="map-marker-alt" size={24} color="white" />,
    link: "/",
  },
  {
    title: "Notifications",
    icons: <AntDesign name="bells" size={24} color="white" />,
    link: "/",
  },
  {
    title: "Offers",
    icons: <Fontisto name="shopping-sale" size={24} color="white" />,
    link: "/",
  },
  {
    title: "Promo",
    icons: <AntDesign name="carryout" size={24} color="white" />,
    link: "/",
  },

  {
    title: "Refer a friend",
    icons: <Feather name="users" size={24} color="white" />,
    link: "/",
  },
  {
    title: "Support",
    icons: <Feather name="phone-call" size={24} color="white" />,
    link: "/",
  },
];
export const DrawerContent = ({ navigation }: any) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#6759ff", "#6759ff"]}
        style={{ flex: 1, minHeight: "100%", padding: 30 }}
      >
        {/* User Profile Section */}
        <View className="flex-row items-center mb-6">
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
        {/* Menu Items */}
        <FlatList
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
        <View className="flex-row items-center gap-2 border-t-2 border-white p-5">
          <AntDesign name="questioncircleo" size={24} color="white" />
          <Text className="text-white">Color Scheme</Text>
        </View>
        <View className="flex-row items-center justify-center bg-[#7e72ff] rounded-full p-1 shadow">
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
      </LinearGradient>
    </ScrollView>
  );
};
