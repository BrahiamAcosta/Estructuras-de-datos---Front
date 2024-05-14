import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button } from '@rneui/base';

export default function Profile({ navigation }) {
    return (
        <View style={styles.background}>
            <View style={styles.separator} />
            <View style={styles.avatarContainer}>
                <Avatar
                    size={64}
                    rounded
                    title="Ba"
                    containerStyle={{
                        backgroundColor: '#02ADD9',
                    }}
                />
                <Text style={styles.userText}>Hola, UserName</Text>
            </View>
            <View style={styles.separator} />
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    height: '60%',
                }}
            >
                <Text style={styles.mainText}>QR's Escaneados: 10</Text>
                <Button
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    buttonStyle={styles.button}
                    title={'Cerrar sesión'}
                    titleStyle={{ fontSize: 20 }}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#D2D2D2',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    separator: {
        backgroundColor: 'black',
        width: '90%',
        height: 3,
        marginTop: 50,
    },
    avatarContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
    },
    userText: {
        color: 'black',
        fontSize: 40,
    },
    mainText: {
        color: 'black',
        fontSize: 30,
    },

    button: {
        marginTop: 50,
        backgroundColor: '#02ADD9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
