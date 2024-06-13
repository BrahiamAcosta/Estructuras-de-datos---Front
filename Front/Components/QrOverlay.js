import { Button } from '@rneui/base';
import { Overlay } from '@rneui/themed';

export default function QrOverlay({ visible, children, toggleScanned , data}) {
    const errorReport = ()=>{
        console.log('Error reportado')
    }
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={toggleScanned}
            overlayStyle={{
                borderRadius: 10,
                height: '80%',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}
        >
            {children}
            {!data.message ? (
                <>
                <Button
                buttonStyle={{
                    backgroundColor: '#3F4145',
                    width: 235,
                    borderRadius: 30,
                }}
                title="Reportar Qr"
                onPress={errorReport}
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
                </>):(
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
