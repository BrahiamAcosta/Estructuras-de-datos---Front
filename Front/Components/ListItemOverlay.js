import { Overlay } from '@rneui/themed';
import { Button } from '@rneui/base';
import { Text, Image } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';

export default function ListItemOverlay({visible, toggleOverlay, qr}) {
    const [sound, setsound] = useState(null)
    const playAudio = async (audioUrl) => {
        const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
        setsound(sound);
        await sound.playAsync();
   };
     return (
          <>
               <Overlay
                    isVisible={visible}
                    onBackdropPress={toggleOverlay}
                    overlayStyle={{
                         borderRadius: 10,
                         height: '90%',
                         width: '90%',
                         alignItems: 'center',
                         justifyContent: 'space-evenly',
                    }}
               >
                {qr.primaryName && (<>
                    <Text style={{ fontSize: 30,
          fontWeight: 'bold', }}>
                         {qr.primaryName.toString()}
                    </Text>
                    <Text style={{ fontSize: 20, color: 'blue' }}>
                         {`Tags: ${qr.tags.join(', ')}`}
                    </Text>
                    <Image
                         source={{
                              uri: qr.resources[2].toString(),
                         }}
                         style={{ width: 300, height: 300 }}
                    />
                    <Text style={{ fontSize: 15 }}>
                         {qr.resources[0].toString()}
                    </Text>
                    <Button
                         buttonStyle={{
                              backgroundColor: '#3F4145',
                              width: 235,
                              borderRadius: 30,
                              marginBottom: 10,
                         }}
                         title="Reproducir audio"
                         onPress={() => playAudio(qr.resources[1].toString())}
                    />
                    <Button
                         buttonStyle={{
                              backgroundColor: '#3F4145',
                              width: 235,
                              borderRadius: 30,
                         }}
                         title="Cerrar"
                         onPress={toggleOverlay}
                    /></>)}
                    
               </Overlay>
          </>
     );
}
