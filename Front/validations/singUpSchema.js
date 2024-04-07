import * as yup from 'yup';

export const singUpValidationSchema = yup.object().shape({
    userName: yup.string().required('Ingresa tu nombre de usuario'),
    email: yup
        .string()
        .email('El correo debe ser valido')
        .required('Ingresa tu correo electrónico'),
    password: yup
        .string()
        .min(8, 'La contraseña debe ser mínimo de 8 caracteres')
        .max(100, 'Contraseña demasiado larga')
        .required('Debes ingresar la contraseña'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('Vuelve a ingresar la contraseña'),
});
