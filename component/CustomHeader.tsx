import { ThemeContext } from "@/app/Context/ThemeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const CustomHeader = ({
  title,
  button,
  icon,
}: {
  title: string;
  button?: string;
  icon?: string;
}) => {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000"); // Default text color
  const [defaultButtonColor, setDefaultButtonColor] = useState("#6859ff"); // Default text color
  const [defaultNavTextColor, setDefaultNavTextColor] = useState("#18202e"); // Default text color
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621"); // Dark theme background color
      setDefaultTextColor("#ffffff"); // Dark theme text color
      setDefaultButtonColor("#ffffff");
      setDefaultNavTextColor("#18202e");
    } else {
      setDefaultColor("#f9f9f9"); // Light theme background color
      setDefaultTextColor("#000000"); // Light theme text color
      setDefaultButtonColor("#6859ff");
      setDefaultNavTextColor("#ffffff");
    }
  }, [isDark]);

  return (
    <View className="flex-row items-center min-w-full  justify-between ">
      <View className="flex-row">
        {" "}
        <View
          style={{
            width: 5,
            height: 30,
            backgroundColor: "#CABDFF",
            marginRight: 10,
          }}
        />
        {/* Title */}
        <Text
          style={{ fontSize: 22, fontWeight: "bold", color: defaultTextColor }}
        >
          {title}
        </Text>
      </View>
      <View className="">
        {button === undefined && icon === undefined ? (
          <View></View>
        ) : (
          <TouchableOpacity
            className={`flex-row items-center gap-2 bg-[${defaultNavTextColor}] p-3 rounded-full`}
          >
            <Text className={`text-[${defaultButtonColor}]`}>{button}</Text>
            {isDark ? (
              <AntDesign name={icon} size={14} color="white" />
            ) : (
              <AntDesign name={icon} size={14} color="black" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
