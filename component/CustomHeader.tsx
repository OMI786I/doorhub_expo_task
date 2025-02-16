import { View, Text } from "react-native";

export const CustomHeader = ({ title }: { title: string }) => (
  <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
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
);
