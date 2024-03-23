import * as Yup from 'yup'

export const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required().min(6),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match') 
})