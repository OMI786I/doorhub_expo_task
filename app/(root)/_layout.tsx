import { Slot, Redirect, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect

export default function AppLayout() {
  const [user, setUser] = useState(false);
  const router = useRouter();

  // Use useFocusEffect to detect when the user navigates away from the onboarding screen
  useFocusEffect(() => {
    if (!user && router.canGoBack()) {
      setUser(true); // Set user to true if they navigate away from the onboarding screen
    }
  });

  // Redirect to the onboarding screen if the user is not set
  return !user ? <Redirect href={"/onboarding/Welcome"} /> : <Slot />;
}
