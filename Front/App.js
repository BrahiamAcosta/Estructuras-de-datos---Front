import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import QrHistory from './screens/QrHistory';
import SingUp from './screens/SingUp';
import ScannerScreen from './screens/ScannerScreen';
import { color } from '@rneui/base';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        animation: 'slide_from_right',
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                        animation: 'slide_from_right',
                    }}
                />
                <Stack.Screen
                    name="SingUp"
                    component={SingUp}
                    options={{
                        headerShown: false,
                        animation: 'slide_from_left',
                    }}
                />
                <Stack.Screen
                    name="Scanner"
                    component={ScannerScreen}
                    options={{
                        headerShown: false,
                        animation: 'slide_from_bottom',
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        animation: 'fade_from_bottom',
                        headerStyle: { backgroundColor: '#02ADD9' },
                        headerTitle: 'Perfil',
                        headerTitleStyle: { fontSize: 30, color: 'white' },
                        headerTitleAlign: 'center',
                        headerBackVisible: { color: 'white' },
                    }}
                />
                <Stack.Screen
                    name="QrHistory"
                    component={QrHistory}
                    options={{
                        animation: 'fade_from_bottom',
                        headerStyle: { backgroundColor: '#02ADD9' },
                        headerTitle: 'Códigos escaneados',
                        headerTitleStyle: { fontSize: 30, color: 'white' },
                        headerTitleAlign: 'center',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
