import { useEffect, useState } from "react";
import { UsuarioFormulario } from "../components/UsuarioFormulario";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";


export const RegistrarUsuarioPage = ({ usuarios = [], handlerAddUsuario, usuarioInicialForm }) => {

    // eslint-disable-next-line no-unused-vars
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioInicialForm);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const usuario = usuarios.find(usuario => usuario.id == id) || usuarioInicialForm;
            setUsuarioSeleccionado(usuario);
        }
    }, [id]);

    return (
        <div className="container my-4">
            <h4>{ usuarioSeleccionado.id > 0 ? 'Editar' : 'Registrar' } Usuario</h4>
            <div className="row">
                <div className="col">
                    <UsuarioFormulario 
                        handlerAddUsuario={handlerAddUsuario}
                        usuarioInicialForm={usuarioInicialForm}
                        usuarioSeleccionado={usuarioSeleccionado}
                    />
                </div>
            </div>
        </div>
    );
}

RegistrarUsuarioPage.propTypes = {
    usuarios: PropTypes.array,
    handlerAddUsuario: PropTypes.func.isRequired,
    usuarioInicialForm: PropTypes.object,
}