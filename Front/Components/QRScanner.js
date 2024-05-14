import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { CameraView, Camera } from 'expo-camera';

const QRScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [direction, setDirection] = useState('');

    //Request Camera permission
    const getCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    useEffect(() => {
        getCameraPermissions();
    }, []);

    //What happenns when the code is scanned
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setDirection(data);
        console.log(`Type: ${type},\n Data: ${data}`);
    };

    if (hasPermission === false) {
        return (
            <View style={{ margin: 10 }}>
                <Text>No access to camera</Text>
                <Button
                    title="Allow Camera"
                    onPress={() => getCameraPermissions()}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
                <CameraView
                    onBarcodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr', 'pdf417'],
                    }}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
            <Text style={styles.mainText}>{direction}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2D2D2',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato',
    },
    mainText: {
        fontSize: 16,
        margin: 20,
    },
});

export default QRScanner;
