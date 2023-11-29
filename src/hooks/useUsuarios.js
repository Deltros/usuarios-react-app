import { useReducer, useState } from "react";
import { usuariosReducer } from "../reducers/usuariosReducer";
import Swal from "sweetalert2";

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

        let mensaje_usuario = (usuario.id === 0) ? 'creado' : 'actualizado';

        Swal.fire({
            title: `Usuario ${mensaje_usuario}`,
            text: `El usuario fue ${mensaje_usuario} con éxito`,
            icon: `success`
        });
    }

    const handlerRemoveUsuario = (id) => {

        Swal.fire({
            title: "¿Estás seguro de que quieres eliminar al usuario?",
            text: "No serás capas de revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'removeUsuario',
                    payload: id,
                })

                Swal.fire({
                    title: "Usuario eliminado",
                    text: "El usuario fue eliminado correctamente",
                    icon: "success"
                });
            }
        });
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