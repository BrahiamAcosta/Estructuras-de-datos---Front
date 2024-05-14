import { View, StyleSheet, Text, Image } from 'react-native';
import { Header, Button, Icon } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import QRScanner from '../Components/QRScanner';

const Logo = require('../assets/logo.png');
const Qr = require('../assets/qr-code.png');

export default function ScannerScreen({ navigation }) {
    const [isScanned, setIsScanned] = useState(false);
    return (
        <SafeAreaProvider>
            <View style={styles.background}>
                <Header
                    placement="center"
                    backgroundColor="#02ADD9"
                    centerComponent={
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                backgroundColor: '#02ADD9',
                            }}
                        >
                            <Text style={styles.header}>Eco</Text>
                            <Image
                                source={Logo}
                                style={{ width: 40, height: 40, marginTop: 10 }}
                            />
                            <Text style={styles.header}>Scan</Text>
                        </View>
                    }
                    leftComponent={
                        <View>
                            <Button
                                onPress={() => navigation.navigate('QrHistory')}
                                buttonStyle={{ backgroundColor: '#02ADD9' }}
                            >
                                <Icon
                                    name="qrcode"
                                    type="font-awesome-5"
                                    color={'white'}
                                    size={30}
                                />
                            </Button>
                        </View>
                    }
                    leftContainerStyle={{
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                    rightComponent={
                        <View>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                buttonStyle={{ backgroundColor: '#02ADD9' }}
                            >
                                <Icon
                                    name="person"
                                    type="material"
                                    color={'white'}
                                    size={40}
                                />
                            </Button>
                        </View>
                    }
                    rightContainerStyle={{
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {!isScanned ? (
                        <>
                            <Image
                                source={Qr}
                                style={{ width: 300, height: 300 }}
                            />
                            <Text style={styles.text}>
                                Escanea el código QR y descubre su contenido :)
                            </Text>
                        </>
                    ) : (
                        <>
                            <QRScanner />
                            <Text style={styles.text}>
                                Apunta tu camara al código :)
                            </Text>
                        </>
                    )}
                    <Button
                        onPress={() => {
                            setIsScanned(!isScanned);
                        }}
                        buttonStyle={styles.button}
                        title={'Escanear'}
                        titleStyle={{ fontSize: 20 }}
                    />
                </View>
            </View>
        </SafeAreaProvider>
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
    header: {
        color: 'white',
        fontSize: 40,
        fontWeight: '300',
    },
    text: {
        color: 'gray',
        fontSize: 25,
        marginTop: 25,
        textAlign: 'center',
    },
    button: {
        marginTop: 50,
        backgroundColor: '#02ADD9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
