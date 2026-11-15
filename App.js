


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
    SafeAreaProvider,
    SafeAreaView,
} from "react-native-safe-area-context";

import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ProfilePage from "./pages/ProfilePage";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFF5F8",
        }}
        edges={["top"]}
      >
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: true,

              headerTitle: "Reel in Love ♡",
              headerTitleAlign: "center",

              headerStyle: {
                backgroundColor: "#F8D7E5",
              },

              headerTintColor: "#8B4565",

              headerTitleStyle: {
                fontWeight: "bold",
              },

              tabBarActiveTintColor: "#C45B83",
              tabBarInactiveTintColor: "#999999",

              tabBarStyle: {
                backgroundColor: "#FFFFFF",
                height: 60,
                paddingBottom: 8,
                paddingTop: 5,
              },
            }}
          >
            {/* HOME PAGE */}
            <Tab.Screen
              name="Home"
              component={HomePage}
            />

            {/* MOVIES PAGE */}
            <Tab.Screen
              name="Movies"
              component={MoviesPage}
            />

            {/* PROFILE PAGE */}
            <Tab.Screen
              name="Profile"
              component={ProfilePage}
            />

            {/* CATEGORY PAGE */}
            <Tab.Screen
              name="Category"
              component={CategoryPage}
              options={{
                tabBarButton: () => null,
                headerShown: true,
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
