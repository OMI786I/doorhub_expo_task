import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, TouchableOpacity } from "react-native";

export const CustomHeader = ({
  title,
  button,
  icon,
}: {
  title: string;
  button?: string;
  icon?: string;
}) => (
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
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "black" }}>
        {title}
      </Text>
    </View>
    <View className="">
      {button === undefined && icon === undefined ? (
        <View></View>
      ) : (
        <TouchableOpacity className="flex-row items-center gap-2 bg-white p-3 rounded-full">
          <Text className="text-[#6859ff]">{button}</Text>
          <AntDesign name={icon} size={14} color="black" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);
