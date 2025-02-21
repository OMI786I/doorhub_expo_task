import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/app/Context/ThemeContext";
import images from "@/constants/images";
import { useSelector } from "react-redux";
const bookings = () => {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000"); // Default text color
  const { isDark } = useContext(ThemeContext);
  const [upcomingBtn, setUpcomingBtn] = useState<boolean>(false);
  const [historyBtn, setHistoryBtn] = useState<boolean>(false);
  const [draftBtn, setDraftBtn] = useState<boolean>(false);
  const services = useSelector((state) => state.services.services);
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

  if (services.length !== 0) {
    return (
      <View>
        <Text>Will Show Data</Text>
      </View>
    );
  } else
    return (
      <View className={`bg-[${defaultColor}]  flex-1`}>
        <View className="bg-white flex-row gap-2 justify-center p-4 w-[90%] mx-auto rounded-xl  ">
          <TouchableOpacity
            onPress={() => setUpcomingBtn(!upcomingBtn)}
            className={
              upcomingBtn
                ? "p-2  bg-[#6759ff38]  rounded-lg"
                : "p-2  rounded-lg"
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
              className={
                historyBtn ? "text-[#6759ff] opacity-100" : "text-black"
              }
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
        <View className="bg-white flex-col gap-2 justify-center p-4 w-[90%] mx-auto mt-2 rounded-xl h-[85%] ">
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
    );
};

export default bookings;
