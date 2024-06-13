import { Button } from '@rneui/base';
import { Overlay } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { Input } from '@rneui/themed';
import { reportQrError } from '../utils/api';
import { getAuthData } from '../utils/authStorage';
import { Alert } from 'react-native';

export default function QrOverlay({ visible, children, toggleScanned , data}) {
    const [errorDescription, setErrorDescription] = useState('');
    const [showInput, setShowInput] = useState(false); 
    const [userName, setUserName] = useState('')

    useEffect(()=>{
        const fetchAuthData = async () => {
            const { userName } = await getAuthData();
            setUserName(userName);
       };
       fetchAuthData();
    },[])
    
    const handleReport = () => {
        setShowInput(true);
      }

      const handleConfirmReport = async () => {
        const reportQr = async () => {
            console.log(data.qrIdentifier,userName,errorDescription)
            response = await reportQrError(data.qrIdentifier,userName,errorDescription);
            console.log(response)
       };
       await reportQr();
        setShowInput(false); 
        Alert.alert(
            'Gracias por la ayuda :)',
            'Tu reporte ha sido guardado con exito.',
            [{ text: 'Aceptar', onPress: () => toggleScanned() }]
          );
        
      };

    return (
        <Overlay
      isVisible={visible}
      onBackdropPress={toggleScanned}
      overlayStyle={{
        borderRadius: 10,
        height: '90%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {children}
      {!data.message ? (
        <>
          {!showInput ? ( 
            <>
              <Button
                buttonStyle={{
                  backgroundColor: '#efb810',
                  width: 235,
                  borderRadius: 30,
                  marginBottom: 10,
                }}
                title="Agregar a favoritos ⭐"
                onPress={handleReport}
              />
              <Button
                buttonStyle={{
                  backgroundColor: '#f76f65',
                  width: 235,
                  borderRadius: 30,
                  marginBottom: 10,
                }}
                title="Reportar QR"
                onPress={handleReport}
              />
              <Button
                buttonStyle={{
                  backgroundColor: '#3F4145',
                  width: 235,
                  borderRadius: 30,
                }}
                title="Cerrar"
                onPress={toggleScanned}
              />
            </>
          ) : (
            <>
              <Input
                placeholder="Ingrese la descripción del error..."
                onChangeText={(text) => setErrorDescription(text)}
                value={errorDescription}
                containerStyle={{ width: '80%', marginBottom: 20 }}
              />
              <Button
                buttonStyle={{
                  backgroundColor: '#3F4145',
                  width: 235,
                  borderRadius: 30,
                  marginBottom: 10,
                }}
                title="Confirmar Reporte"
                onPress={handleConfirmReport}
              />
            </>
          )}
        </>
      ) : (
        <Button
          buttonStyle={{
            backgroundColor: '#3F4145',
            width: 235,
            borderRadius: 30,
          }}
          title="Cerrar"
          onPress={toggleScanned}
        />
      )}
    </Overlay>
    );
}
