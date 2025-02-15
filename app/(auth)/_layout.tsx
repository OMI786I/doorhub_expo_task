import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="signin" options={{}} />
      <Stack.Screen name="signup" options={{}} />
    </Stack>
  );
}
