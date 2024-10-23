import { Stack, useSegments, router, Tabs } from "expo-router";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";
import { useEffect } from "react";


const StackLayout = () => {
  const { user } = useAuth();

  useEffect(() => {

    if (!user?.authenticated) {
      router.replace("signin");
    } else {

      router.replace("(protected)/(index)");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false, tabBarItemStyle: { display: "none" } }} />
    </Stack>
  );
}
export default function Layout() {


  return (
    <AppProvider>
      <StackLayout />
    </AppProvider>
  );
}
