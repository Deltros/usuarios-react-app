import { useReducer } from "react";
import { loginReducer } from "../pages/reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUsuario } from "../services/authServices";

// Si viene definido en la sesion lo retoma, osino crea uno nuevo
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {
    
    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ username, password }) => {

        const isLogin = loginUsuario({ username, password });

        if  (isLogin) {

            const user = { username: 'admin'};
            
            dispatch({
                type: 'login',
                payload: user,
            })

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));
        } else {
            Swal.fire('Error de validacion', 'Nombre de usuario o contraseña incorrectos', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
    }

    return {
        login,
        handlerLogin,
        handlerLogout
    };
}