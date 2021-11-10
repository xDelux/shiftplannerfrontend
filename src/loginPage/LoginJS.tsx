import Axios from 'axios'
// import { userContext } from '../Context/userContext';

export const Register = async (username: string, password: string, confirmPassword: string, email: string) => {
    
}

export const Login = async user => {
    const result = (await Axios.post('http://localhost:8080/login', { user }, { withCredentials: true })).data
    // userContext(result);
}
