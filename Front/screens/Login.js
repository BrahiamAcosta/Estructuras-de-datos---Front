import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/base';
import { Formik } from 'formik';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Inicia sesión</Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
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
                            <Input
                                labelStyle={{ color: 'white' }}
                                label="Correo electrónico"
                                onChangeText={handleChange('email')}
                                value={values.email}
                                inputStyle={{
                                    backgroundColor: 'white',
                                }}
                                containerStyle={{ width: 300 }}
                            />

                            <Input
                                labelStyle={{ color: 'white' }}
                                label="Contraseña"
                                onChangeText={handleChange('password')}
                                value={values.password}
                                inputStyle={{
                                    backgroundColor: 'white',
                                }}
                                containerStyle={{ width: 300 }}
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
});
