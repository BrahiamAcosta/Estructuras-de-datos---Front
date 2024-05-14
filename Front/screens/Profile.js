import { Text, View, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
    return (
        <View style={styles.background}>
            <Text>Profile Screen!!</Text>
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
