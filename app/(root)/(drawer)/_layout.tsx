import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerContent } from "@/component/DrawerContent";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
      }}
    >
      {" "}
      <Drawer.Screen name="index" />
      <Drawer.Screen name="settings" />
    </Drawer>
  );
}
