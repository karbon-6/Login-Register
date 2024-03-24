import { Form, Formik } from "formik"
import { initialValues, validationSchema } from "./__request/initialValuesAndValidation"
import { loginReq } from "./__request/logInRequest"
import { ErrorMessageFields, FieldStyled, SubmitButton } from "../../../utilites/utilities"
import { useNavigate } from "react-router-dom"



function Login(){

    const labelStyle = 'block text-sm font-medium text-gray-600'
    const navigate = useNavigate()

    async function login(values){
        await loginReq(values)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => login(values)}
                >
                    {({handleSubmit})=> (
                        <Form>
                            <div className="mb-4">
                                <label className={labelStyle}>
                                    Email
                                </label>
                                <FieldStyled name="email" type="email" />
                                <ErrorMessageFields name="email" />
                            </div>
                            <div className="mb-4">
                                <label className={labelStyle}>
                                    Password
                                </label>
                                <FieldStyled name="password" type="password" />
                                <ErrorMessageFields name="password" />
                            </div>
                            <div className="flex items-center justify-center">
                                <SubmitButton onClick={handleSubmit} title="Login" />
                                <p className="text-sm text-gray-600">
                                    Don't have an account?
                                    <button
                                    className="text-blue-500 cursor-pointer hover:underline"
                                    onClick={()=> navigate('register')}
                                    >
                                        Create one
                                    </button>
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login