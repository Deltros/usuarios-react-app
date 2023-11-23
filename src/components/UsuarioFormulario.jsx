import { useState } from "react";
import PropTypes from 'prop-types';

const usuarioInicialForm = {
    username:'1',
    password:'2',
    email:'3',
}

export const UsuarioFormulario = ({handlerAddUsuario}) => {

    const [usuarioForm, setUsuarioForm] = useState(usuarioInicialForm);

    const { username, password, email } = usuarioForm;

    const onInputChange = ({ target }) => {

        const { name, value } = target

        setUsuarioForm({
            ...usuarioForm,
            [name]: value,
        })

    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!username || !password || !email) {
            alert("Debe llenar todos los campos");
            return;
        }

        handlerAddUsuario(usuarioForm);

        setUsuarioForm(usuarioInicialForm);
    }

    return (
        <>
            <h5>Formulario de usuario</h5>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control my-3 w-75"
                    placeholder="Nombre de usuario"
                    name="username"
                    value={username}
                    onChange={ onInputChange }/>
                <input
                    type="password"
                    className="form-control my-3 w-75"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={ onInputChange }/>
                <input
                    type="text"
                    className="form-control my-3 w-75"
                    placeholder="Correo electrónico"
                    name="email"
                    value={email}
                    onChange={ onInputChange }/>
                <button 
                    type="submit"
                    className="btn btn-primary">
                        Registrar Usuario
                </button>

            </form>
        </>
    );
}

UsuarioFormulario.propTypes = {
    handlerAddUsuario: PropTypes.func.isRequired
}