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
    const [ formularioVisible, setFormularioVisible ] = useState(false);

    const handlerAddUsuario = (usuario) => {

        const type = (usuario.id === 0) ? 'addUsuario' : 'updateUsuario';

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

        handlerCerrarFormulario();
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
        setFormularioVisible(true);
    }

    const handlerAbrirFormulario = () => {
        setFormularioVisible(true);
    }

    const handlerCerrarFormulario = () => {
        setFormularioVisible(false);
        setUsuarioSeleccionado(usuarioInicialForm);
    }

    return {
        usuarios,
        usuarioSeleccionado,
        usuarioInicialForm,
        formularioVisible,
        handlerAddUsuario,
        handlerRemoveUsuario,
        handlerSeleccionarUsuarioForm,
        handlerAbrirFormulario,
        handlerCerrarFormulario,
    }
}