import { View, StyleSheet, Text, Image } from 'react-native';
import { Header } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Logo = require('../assets/logo.png');

export default function ScannerScreen({ navigation }) {
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
                                justifyContent: 'center',
                                backgroundColor: '#02ADD9',
                            }}
                        >
                            <Text style={styles.header}>Eco</Text>
                            <Image
                                source={Logo}
                                style={{ width: 40, height: 40 }}
                            />
                            <Text style={styles.header}>Scan</Text>
                        </View>
                    }
                />
                <Text style={{ color: 'black' }}> Scaner Screen</Text>
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
});
