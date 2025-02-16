import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "./Context/ThemeContext";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Context" options={{}} />
        <Stack.Screen name="(root)" options={{}} />
        <Stack.Screen name="(auth)" options={{}} />
        <Stack.Screen name="onboarding" options={{}} />
        <Stack.Screen name="verification" options={{}} />
      </Stack>
    </ThemeProvider>
  );
}
