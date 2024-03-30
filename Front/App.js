import { View } from "react-native";
import QRScanner from "./Components/QRScanner";

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <QRScanner />
        </View>
    );
}
