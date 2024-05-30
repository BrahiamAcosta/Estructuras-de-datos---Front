import { Button } from '@rneui/base';
import { Overlay } from '@rneui/themed';

export default function CustomOverlay({ visible, toggleOverlay, children }) {
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{
                borderRadius: 10,
                height: '40%',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}
        >
            {children}
            <Button
                buttonStyle={{
                    backgroundColor: '#3F4145',
                    width: 235,
                    borderRadius: 30,
                }}
                title="Volver a intentar"
                onPress={toggleOverlay}
            />
        </Overlay>
    );
}
