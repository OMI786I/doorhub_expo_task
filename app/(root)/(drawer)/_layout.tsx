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
      <Drawer.Screen name="(tabs)" />
      <Drawer.Screen name="user" />
    </Drawer>
  );
}
