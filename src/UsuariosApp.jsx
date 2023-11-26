import { useReducer, useState } from "react";
import { UsuarioFormulario } from "./components/UsuarioFormulario";
import { UsuariosLista } from "./components/UsuariosLista";
import { usuariosReducer } from "./reducers/usuariosReducer";

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

export const UsuariosApp = () => {

    const [usuarios, dispatch] = useReducer(usuariosReducer, usuariosInicial);

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

    return (
        <div className="container my-4">
            <h2>Usuarios</h2>

            <div className="row my-4">

                <div className="col">
                    <UsuarioFormulario
                         handlerAddUsuario={handlerAddUsuario} 
                         usuarioInicialForm={usuarioInicialForm}
                         usuarioSeleccionado={usuarioSeleccionado}
                    />
                </div>

                <div className="col">

                    { usuarios.length == 0
                        ?
                            <div className="alert alert-warning">
                                No hay usuarios en el sistema
                            </div>
                    
                        :    
                            <UsuariosLista
                                usuarios={usuarios}
                                handlerRemoveUsuario={handlerRemoveUsuario}
                                handlerSeleccionarUsuarioForm = {handlerSeleccionarUsuarioForm}
                            />
                    }

                </div>

            </div>
        </div>
    );
}