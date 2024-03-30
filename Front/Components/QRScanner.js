import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera/next";

const QRScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [direction, setDirection] = useState("Not yet Scanned");

    //Request Camera permission
    const getCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
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

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>
        );
    }
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
                        barcodeTypes: ["qr", "pdf417"],
                    }}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
            <Text style={styles.mainText}>{direction}</Text>
            {scanned && (
                <Button
                    title="Scan Again"
                    onPress={() => setScanned(false)}
                    color={"tomato"}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    barcodebox: {
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: 300,
        overflow: "hidden",
        borderRadius: 30,
        backgroundColor: "tomato",
    },
    mainText: {
        fontSize: 16,
        margin: 20,
    },
});

export default QRScanner;
