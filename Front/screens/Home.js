import { Button } from '@rneui/base';
import { View, Text, Image, StyleSheet } from 'react-native';

const Logo = require('../assets/logo.png');
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{ width: 170, height: 186 }} />
            <Text>Home Screen</Text>
            <Button
                title={'Go to Login'}
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02ADD9',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
