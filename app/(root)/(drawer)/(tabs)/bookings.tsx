import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/app/Context/ThemeContext";
import images from "@/constants/images";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AntDesign } from "@expo/vector-icons";
interface Booking {
  id: number;
  title: string;
  type: string;
  unitNumber: number;
  bedroomsNumber: number;
  description?: string;
  time: Date | null | string;
  icons: ImageSourcePropType;
}

const formatDate = (time: Date | string | null) => {
  if (!time) return "No date available"; // Handle null cases

  // Convert string to Date if necessary
  const dateObj = typeof time === "string" ? new Date(time) : time;

  if (isNaN(dateObj.getTime())) return "Invalid date"; // Handle invalid dates

  // Format the date and time
  return `${dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}, ${dateObj.toLocaleDateString([], {
    day: "2-digit",
    month: "short",
  })}`;
};

const bookings = () => {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000"); // Default text color
  const { isDark } = useContext(ThemeContext);
  const [upcomingBtn, setUpcomingBtn] = useState<boolean>(false);
  const [historyBtn, setHistoryBtn] = useState<boolean>(false);
  const [draftBtn, setDraftBtn] = useState<boolean>(false);
  const services: Booking[] = useSelector(
    (state: RootState) => state.services.services
  );
  console.log(services);
  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621"); // Dark theme background color
      setDefaultTextColor("#ffffff"); // Dark theme text color
    } else {
      setDefaultColor("#f9f9f9"); // Light theme background color
      setDefaultTextColor("#000000"); // Light theme text color
    }
  }, [isDark]);

  return (
    <View className={`bg-[${defaultColor}]  flex-1`}>
      <View className="bg-white flex-row gap-2 justify-center p-4 w-[90%] mx-auto rounded-xl  ">
        <TouchableOpacity
          onPress={() => setUpcomingBtn(!upcomingBtn)}
          className={
            upcomingBtn ? "p-2  bg-[#6759ff38]  rounded-lg" : "p-2  rounded-lg"
          }
        >
          <Text
            className={
              upcomingBtn ? "text-[#6759ff] opacity-100" : "text-black"
            }
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHistoryBtn(!historyBtn)}
          className={
            historyBtn ? "p-2  bg-[#6759ff38]  rounded-lg" : "p-2  rounded-lg"
          }
        >
          <Text
            className={historyBtn ? "text-[#6759ff] opacity-100" : "text-black"}
          >
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDraftBtn(!draftBtn)}
          className={
            draftBtn ? "p-2  bg-[#6759ff38]  rounded-lg" : "p-2  rounded-lg"
          }
        >
          <Text
            className={draftBtn ? "text-[#6759ff] opacity-100" : "text-black"}
          >
            Draft
          </Text>
        </TouchableOpacity>
      </View>

      {services.length === 0 ? (
        <View className="bg-white flex-col gap-2 justify-center p-4 w-[90%] mx-auto mt-2 rounded-xl h-[85%] ">
          <View>
            <View className="items-center">
              <Image source={images.emptyBookings} />
            </View>

            <View className="justify-center items-center mt-9">
              <Text className="font-bold text-2xl">No upcoming order</Text>
              <Text className="text-[#535763] my-4">
                Currently you don't have any upcoming orders
              </Text>
              <Text className="text-[#535763]">
                Place and track orders from here
              </Text>
            </View>
            <View className="items-center mt-5">
              <TouchableOpacity className="p-4 border rounded-xl bg-[#6759ff]">
                <Text className="text-white">View All Services</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View className=" flex-col gap-2 p-4 flex-1 w-[96%] mx-auto mt-2 rounded-xl">
          <FlatList
            data={services}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 20,
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="bg-white rounded-xl p-4">
                <View className="flex-row items-center gap-6">
                  <Image source={item.icons} />
                  <View>
                    <Text className="font-bold text-xl mb-3">{item.title}</Text>
                    <Text className="text-[#6f767e]">
                      Reference Code: #D-571224
                    </Text>
                  </View>
                </View>
                <View className="border-[1px] border-[#EFEFEF] my-4"></View>
                <View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-[#6F767E]">Status</Text>
                    <Text className="p-2 text-[#EB833C] bg-[#EB833C1A] rounded-xl">
                      Pending
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-3">
                    <AntDesign name="calendar" size={30} />
                    <View>
                      <Text className="font-bold text-lg">
                        {formatDate(item.time)}
                      </Text>
                      <Text className="text-[#6F767E]">Schedule</Text>
                    </View>
                  </View>
                  <View className="flex-row items-center justify-between gap-3 mt-10">
                    <View className="flex-row justify-center items-center gap-2">
                      <AntDesign name="user" size={30} />
                      <View>
                        <Text className="font-bold text-lg">User</Text>
                        <Text className="text-[#6F767E]">Service Provider</Text>
                      </View>
                    </View>
                    <TouchableOpacity className="flex-row items-center gap-3 bg-[#6759FF] rounded-xl p-4">
                      <AntDesign name="phone" size={24} color={"#ffffff"} />
                      <Text className="text-white">Call</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default bookings;
