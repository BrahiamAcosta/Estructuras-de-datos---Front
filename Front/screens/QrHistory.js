import { Text, View, StyleSheet } from 'react-native';

export default function QrHistory({ navigation }) {
    return (
        <View style={styles.background}>
            <Text>Qr history Screen!!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#D2D2D2',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
