import Welcome from "@/component/Welcome";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <Welcome />
    </SafeAreaView>
  );
}
