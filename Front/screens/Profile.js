import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button } from '@rneui/base';
import { clearAuthData } from '../utils/authStorage';
import { useEffect, useState } from 'react';
import { getAuthData } from '../utils/authStorage';

export default function Profile({ navigation }) {

    const [userName, setUserName] = useState('')
    useEffect(()=>{
        const fetchAuthData = async () => {
            const { userName } = await getAuthData();
            setUserName(userName);
       };
       fetchAuthData();
    },[])
    const handleLogout = async () => {
        await clearAuthData();
        navigation.navigate('Home');
    };
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
                <Text style={styles.userText}>{`Bienvenido 👋 ${userName}`}</Text>
                
            </View>
            <View style={styles.separator} />
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    height: '60%',
                }}
            ><Text style={styles.mainText}>🌿 ¡Bienvenido a EcoScan! 🌿 Nuestra aplicación está diseñada para hacer tus rutas de turismo 
            ecológico y senderismo aún más emocionantes. Simplemente escanea un código QR 📷 y descubre imágenes 🖼️, textos 📖 y audios 🎧 
            que te brindarán información fascinante sobre tu entorno natural. Enriquece tu aventura y disfruta al máximo de la naturaleza 
            con EcoScan. 🌳✨</Text>
               
                <Button
                    onPress={() => {
                        handleLogout();
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
        fontSize: 20,
        textAlign:'center',
        marginBottom:40
    },

    button: {
        marginTop: 50,
        backgroundColor: '#02ADD9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
