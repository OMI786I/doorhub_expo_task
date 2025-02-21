import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "./Context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "@/store";
export default function RootLayout() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
