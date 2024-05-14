import { Button, Icon, color } from '@rneui/base';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Logo = require('../assets/logo.png');
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style={{ backgroundColor: '#02ADD9' }} />
            <View style={styles.logo}>
                <Image source={Logo} style={{ width: 170, height: 186 }} />
            </View>

            <View style={styles.title}>
                <Text style={styles.text}>Eco-Scan</Text>
            </View>

            <View style={styles.buttons}>
                <Button
                    onPress={() => navigation.navigate('Login')}
                    buttonStyle={{
                        backgroundColor: '#3F4145',
                        width: 235,
                        borderRadius: 30,
                    }}
                    titleStyle={{ marginHorizontal: 15 }}
                >
                    <Icon name="login" type="material" color={'white'} />
                    Iniciar Sesión
                </Button>
                <Button
                    onPress={() => navigation.navigate('SingUp')}
                    buttonStyle={{
                        backgroundColor: '#3F4145',
                        width: 235,
                        borderRadius: 30,
                    }}
                    title={'Crear cuenta'}
                    titleStyle={{ marginHorizontal: 15 }}
                ></Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02ADD9',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        width: '100%',
        height: '45%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: '300',
    },
    title: {
        width: '100%',
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        width: '100%',
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 80,
        marginTop: 80,
    },
});
