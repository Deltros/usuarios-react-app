import { useReducer, useState } from "react";
import { usuariosReducer } from "../reducers/usuariosReducer";

const usuariosInicial = [
    {
        id:1,
        username: 'juan',
        password: 'asadsda2',
        email: 'pepegmail.com',
    }
];

const usuarioInicialForm = {
    id: 0,
    username:'',
    password:'',
    email:'',
}

export const useUsuarios = () => {

    const [ usuarios, dispatch ] = useReducer(usuariosReducer, usuariosInicial);

    const [ usuarioSeleccionado, setUsuarioSeleccionado ] = useState(usuarioInicialForm);

    const handlerAddUsuario = (usuario) => {

        let type;

        if (usuario.id === 0) {
            type = 'addUsuario';
        } else {
            type = 'updateUsuario';
        }

        dispatch({
            type: type,
            payload: usuario,
        })
    }

    const handlerRemoveUsuario = (id) => {
        dispatch({
            type: 'removeUsuario',
            payload: id,
        })
    }

    const handlerSeleccionarUsuarioForm = (usuario) => {
        setUsuarioSeleccionado({...usuario});
    }

    return {
        usuarios,
        usuarioSeleccionado,
        usuarioInicialForm,
        handlerAddUsuario,
        handlerRemoveUsuario,
        handlerSeleccionarUsuarioForm
    }
}