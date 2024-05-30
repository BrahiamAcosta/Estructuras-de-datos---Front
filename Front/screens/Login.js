import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/base';
import { Formik } from 'formik';
import FormikInputValue from '../Components/FormikInputValue';
import { loginValidationSchema } from '../validations/loginSchema';
import { API_URL } from '../config.env';
import { useState } from 'react';
import CustomOverlay from '../Components/CustomOverlay';

export default function Login({ navigation }) {
    const [visible, setvisible] = useState(false);
    const [info, setInfo] = useState('');
    const validate = async (values) => {
        const { email, password } = values;
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();
            if (response.ok && data.token && data.userName) {
                setInfo(data);
                navigation.navigate('Scanner');
            } else {
                setInfo(data);
                toggleOverlay();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const toggleOverlay = () => {
        setvisible(!visible);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Inicia sesión</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => validate(values)}
            >
                {({ handleSubmit }) => (
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View>
                            <FormikInputValue
                                name="email"
                                label="Correo electrónico"
                            />

                            <FormikInputValue
                                name="password"
                                label="Contraseña"
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.buttons}>
                            <Button
                                titleStyle={{ marginHorizontal: 15 }}
                                onPress={handleSubmit}
                                title="Iniciar sesión"
                                buttonStyle={{
                                    backgroundColor: '#3F4145',
                                    width: 235,
                                    borderRadius: 30,
                                }}
                            />
                            <Button
                                onPress={() => navigation.navigate('Home')}
                                buttonStyle={{
                                    backgroundColor: '#3F4145',
                                    width: 235,
                                    borderRadius: 30,
                                }}
                                title={'Regresar'}
                                titleStyle={{ marginHorizontal: 15 }}
                            />
                        </View>
                    </View>
                )}
            </Formik>
            <CustomOverlay visible={visible} toggleOverlay={toggleOverlay}>
                <Text style={styles.secondary}>!Oops¡ Algo salió mal</Text>
                <Text style={styles.secondary}>{info.message}</Text>
            </CustomOverlay>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02ADD9',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 60,
        fontWeight: '200',
        marginBottom: 50,
    },
    buttons: {
        width: '100%',
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 80,
        marginTop: 80,
    },
    secondary: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
});
