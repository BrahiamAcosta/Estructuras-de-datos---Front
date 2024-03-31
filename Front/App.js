import { View } from "react-native";
import QRScanner from "./Components/QRScanner";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Components/screens/Home";
import Login from "./Components/screens/Login";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerBackVisible: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
