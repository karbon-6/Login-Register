import {Formik} from 'formik'
import { initialValues, validationSchema } from './initialValuesAndValidation'

function Register(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                >

                </Formik>
            </div>
        </div>
    )
}