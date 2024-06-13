import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import QrOverlay from './QrOverlay';
import { fetchSingleQr } from '../utils/api';
import { getAuthData } from '../utils/authStorage';
import { Button } from '@rneui/base';
import { Audio } from 'expo-av';

const QRScanner = ({ handleScanned }) => {
     const [hasPermission, setHasPermission] = useState(null);
     const [scanned, setScanned] = useState(false);
     const [showOverlay, setshowOverlay] = useState(false);
     const [data, setData] = useState({});
     const [userName, setUserName] = useState(null);
     const [sound, setSound] = useState(null);

     const toggleOverlay = () => {
          setshowOverlay(!showOverlay);
     };

     const playAudio = async (audioUrl) => {
          const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
          setSound(sound);
          await sound.playAsync();
     };

     //Request Camera permission
     const getCameraPermissions = async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
     };

     useEffect(() => {
          getCameraPermissions();
          const fetchAuthData = async () => {
               const { userName } = await getAuthData();
               setUserName(userName);
          };
          fetchAuthData();
     }, []);

     //What happenns when the code is scanned
     const handleBarCodeScanned = ({ type, data }) => {
          setshowOverlay(!showOverlay);
          const saveData = async () => {
               response = await fetchSingleQr(data, userName);
               setData(response);
          };
          saveData();
          console.log('scanned');
          setScanned(true);
     };

     if (hasPermission === false) {
          return (
               <View style={{ margin: 10 }}>
                    <Text>No tenemos acceso a la cámara :(</Text>
                    <Button
                         title="Permitir cámara"
                         onPress={() => getCameraPermissions()}
                    />
               </View>
          );
     }

     return (
          <>
               {!scanned && (
                    <View style={styles.container}>
                         <View style={styles.barcodebox}>
                              <CameraView
                                   onBarcodeScanned={
                                        scanned
                                             ? undefined
                                             : handleBarCodeScanned
                                   }
                                   barcodeScannerSettings={{
                                        barcodeTypes: ['qr', 'pdf417'],
                                   }}
                                   style={StyleSheet.absoluteFillObject}
                              />
                         </View>
                    </View>
               )}
               {data ? (
                    <QrOverlay
                         visible={showOverlay}
                         toggleOverlay={toggleOverlay}
                         toggleScanned={handleScanned}
                         data={data}
                    >
                         <Text style={styles.mainText}>
                              {!data.message
                                   ? `${data.primaryName}`
                                   : `Lo sentimos, ${data.message}`}
                         </Text>
                         {data.resources && (
                              <>
                                   <Image
                                        source={{
                                             uri: data.resources[2].content.toString(),
                                        }}
                                        style={{ width: 300, height: 300 }}
                                   />
                                   <Text style={{ fontSize: 15 }}>
                                        {data.resources[0].content.toString()}
                                   </Text>
                                   <Button
                                        buttonStyle={{
                                             backgroundColor: '#3F4145',
                                             width: 235,
                                             borderRadius: 30,
                                             marginBottom: 10,
                                        }}
                                        title="Reproducir audio"
                                        onPress={() =>
                                             playAudio(
                                                  data.resources[1].content
                                             )
                                        } 
                                   />
                              </>
                         )}
                    </QrOverlay>
               ) : (
                    <QrOverlay
                         visible={showOverlay}
                         toggleOverlay={toggleOverlay}
                         toggleScanned={handleScanned}
                         data={data}
                    >
                         <Text>Cargando...</Text>
                         <Text>{data ? data.primaryName : ''}</Text>
                    </QrOverlay>
               )}
          </>
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
          fontSize: 30,
          fontWeight: 'bold',
     },
});

export default QRScanner;
