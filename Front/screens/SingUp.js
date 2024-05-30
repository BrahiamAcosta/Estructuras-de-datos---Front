import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/base';
import { Formik } from 'formik';
import FormikInputValue from '../Components/FormikInputValue';
import { singUpValidationSchema } from '../validations/singUpSchema';
import { useState } from 'react';
import CustomOverlay from '../Components/CustomOverlay';
import { API_URL } from '../config.env';

export default function SingUp({ navigation }) {
    const [visible, setvisible] = useState(false);
    const [info, setInfo] = useState('');
    const validate = async (values) => {
        const { userName, email, password } = values;
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName,
                    email,
                    password,
                }),
            });

            const data = await response.json();
            console.log(data);
            setInfo(data);
            toggleOverlay();
        } catch (error) {
            console.log(error);
        }
    };
    const toggleOverlay = () => {
        setvisible(!visible);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Regístrate</Text>

            <Formik
                validationSchema={singUpValidationSchema}
                initialValues={{
                    userName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
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
                                name="userName"
                                label="Nombre de Usuario"
                            />
                            <FormikInputValue
                                name="email"
                                label="Correo electrónico"
                            />
                            <FormikInputValue
                                name="password"
                                label="Contraseña"
                                secureTextEntry={true}
                            />
                            <FormikInputValue
                                name="confirmPassword"
                                label="Repetir Contraseña"
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.buttons}>
                            <Button
                                titleStyle={{ marginHorizontal: 15 }}
                                onPress={handleSubmit}
                                title="Crear cuenta"
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
                {info.message == 'Cuenta creada con exito' ? (
                    <>
                        <Text style={styles.secondary}>{info.message}</Text>
                        <Text style={styles.secondary}>
                            Dirígete a iniciar sesión
                        </Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.secondary}>
                            !Oops¡ Algo salió mal
                        </Text>
                        <Text style={styles.secondary}>{info.message}</Text>
                    </>
                )}
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
        marginTop: 80,
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
