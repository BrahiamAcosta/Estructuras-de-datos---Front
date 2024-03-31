import { View, Text } from "react-native";
import { Button } from "@rneui/base";

export default function Login({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Login Screen</Text>
            <Button
                title={"Go Home screen"}
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}
