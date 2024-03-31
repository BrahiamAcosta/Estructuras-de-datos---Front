import { Button } from "@rneui/base";
import { View, Text } from "react-native";

export default function Home({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Screen</Text>
            <Button
                title={"Go to Login"}
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}
