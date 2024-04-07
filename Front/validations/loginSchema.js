import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('El correo debe ser valido')
        .required('Ingresa tu correo electrónico'),
    password: yup
        .string()
        .min(8, 'La contraseña debe ser mínimo de 8 caracteres')
        .max(100, 'Contraseña demasiado larga')
        .required('Debes ingresar la contraseña'),
});
