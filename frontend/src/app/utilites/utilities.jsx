import { ErrorMessage, Field } from "formik";

const ErrorMessageFields = ({ name = '' }) => (
    <ErrorMessage name={name}>
        {msg => <div className="text-red-600">{msg}</div>}
    </ErrorMessage>
)

const FieldStyled = ({ name = '', type = '' }) => (
    <Field name={name} type={type} className='mt-1 p-2 w-full border rounded-md' />
)

const SubmitButton = ({ onClick, title = '' }) => (
    <button
        onClick={onClick}
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
    >
        {title}
    </button>
)

export { ErrorMessageFields, FieldStyled, SubmitButton }