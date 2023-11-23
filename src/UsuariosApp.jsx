import { useReducer } from "react";
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

export const UsuariosApp = () => {

    const [usuarios, dispatch] = useReducer(usuariosReducer, usuariosInicial);

    const handlerAddUsuario = (usuario) => {
        dispatch({
            type: 'addUsuario',
            payload: usuario,
        })
    }

    return (
        <div className="container my-4">
            <h2>Usuarios</h2>

            <div className="row my-4">

                <div className="col">
                    <UsuarioFormulario handlerAddUsuario={handlerAddUsuario} />
                </div>

                <div className="col">
                    <UsuariosLista usuarios={usuarios}/>
                </div>

            </div>
        </div>
    );
}