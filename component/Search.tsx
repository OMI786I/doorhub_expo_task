import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { ThemeContext } from "@/app/Context/ThemeContext";

const Search = () => {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000"); // Default text color

  const { isDark } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
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
    <View className="flex-row items-center bg-[#fbfbfb] rounded-xl w-[100%] mx-auto py-3 px-1 gap-2 ">
      <TextInput
        placeholderTextColor={"#D1D3D4"}
        style={{
          flex: 1,
          marginLeft: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          color: defaultTextColor,
          backgroundColor: "#fbfbfb", // Light gray background
          borderRadius: 8, // Rounded
          height: 40,
        }}
        placeholder="Search what you need"
        onChangeText={setSearch}
      />
      <TouchableOpacity className="bg-[#6759ff] p-2  rounded-lg mr-2">
        {" "}
        <Octicons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
