import * as Yup from 'yup'

const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6)
})

const initialValues = {
    name: '',
    password: ''
}

export {initialValues, validationSchema}
