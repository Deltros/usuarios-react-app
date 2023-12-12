import { useReducer } from "react";
import { UsuariosPages } from "./pages/UsuariosPage";
import { loginReducer } from "./auth/pages/reducers/loginReducer";
import Swal from "sweetalert2";
import { LoginPage } from "./auth/pages/LoginPage";

// Si viene definido en la sesion lo retoma, osino crea uno nuevo
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const UsuariosApp = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ username, password }) => {

        if (username === 'admin' && password === '123456') {

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

    return (
        <>
            { login.isAuth 
                ? <UsuariosPages/>
                : <LoginPage handlerLogin={handlerLogin}/>
            }
        </>
    );
}