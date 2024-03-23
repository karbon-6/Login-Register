import axios from "axios";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})

instance.interceptors.response.use(
    (response)=> response,
    (error) => {
        if(!error.response){
            toast.error('Network Error')
        }
        return Promise.reject(error)
    }
)

export default function ApiFetchReq(methods, url, body){
    const config = {
        method: methods,
        url,
        data: body,
    }
    return instance(config)
    .then(res => {
        return res
    })
    .catch(err => {
        throw err
    })
}