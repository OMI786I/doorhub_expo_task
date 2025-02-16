import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="verification" options={{}} />
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="(auth)" options={{}} />
      <Stack.Screen name="onboarding" options={{}} />
    </Stack>
  );
}
