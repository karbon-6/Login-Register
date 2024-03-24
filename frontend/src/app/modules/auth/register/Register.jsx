import {Formik, Form, Field } from 'formik'
import { initialValues, validationSchema } from './__request/initialValuesAndValidation'
import { ErrorMessageFields, FieldStyled, SubmitButton } from '../../../utilites/utilities'
import { registerUserReq } from './__request/registerRequest'
import { useNavigate } from 'react-router-dom'

function Register(){

    const labelStyle = 'block text-sm font-medium text-gray-600'
    const navigate = useNavigate()
    
    async function handleRegister(values){
        const response = await registerUserReq(values)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values)=> handleRegister(values)}
                >
                    {({handleSubmit})=> (
                        <Form>
                            <div className='mb-4'>
                                <label className={labelStyle}>
                                    Name
                                </label>
                                <FieldStyled name='name' type='text' />
                                <ErrorMessageFields name='name' />
                            </div>
                            <div className='mb-4'>
                                <label className={labelStyle}>
                                    Email
                                </label>
                                <FieldStyled name='email' type='email' />
                                <ErrorMessageFields name='email'/>
                            </div>
                            <div className='mb-4'>
                                <label className={labelStyle}>
                                    Password
                                </label>
                                <FieldStyled name='password' type='password' />
                                <ErrorMessageFields name='password' />
                            </div>
                            <div className='mb-4'>
                                <label className={labelStyle}>
                                    Confirm Password
                                </label>
                                <FieldStyled name='confirmPassword' type='password' />
                                <ErrorMessageFields name='confirmPassword' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <SubmitButton onClick={handleSubmit} title='Register' />
                                <p className='text-sm text-gray-600'>
                                    Already have an Account?
                                    <button
                                    className='text-blue-500 cursor-printer hover:underline'
                                    onClick={()=> navigate('/login/')}
                                    >
                                        Login
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

export default Register