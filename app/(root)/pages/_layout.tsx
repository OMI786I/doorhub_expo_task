import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerShown: false,
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="allCategories"
        options={{
          title: "",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="applianceRepair"
        options={{
          title: "Appliance Repair",
        }}
      />
    </Stack>
  );
}
