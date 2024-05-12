import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/base';
import { Formik } from 'formik';
import FormikInputValue from '../Components/FormikInputValue';
import { singUpValidationSchema } from '../validations/singUpSchema';

export default function SingUp({ navigation }) {
    const validate = (values) => {
        console.log(values);
        navigation.navigate('Scanner');
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
                {({ handleChange, handleSubmit, values }) => (
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
                            />
                            <FormikInputValue
                                name="confirmPassword"
                                label="Repetir Contraseña"
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
});
