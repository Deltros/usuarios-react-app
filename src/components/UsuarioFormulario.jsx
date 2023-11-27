import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const UsuarioFormulario = ({ handlerAddUsuario, usuarioInicialForm, usuarioSeleccionado }) => {

    const [usuarioForm, setUsuarioForm] = useState(usuarioInicialForm);

    const { id, username, password, email } = usuarioForm;

    useEffect(() => {
        setUsuarioForm({...usuarioSeleccionado});
    }, [usuarioSeleccionado])

    const onInputChange = ({ target }) => {

        const { name, value } = target

        setUsuarioForm({
            ...usuarioForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!username || (!password && id===0) || !email) {
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
                <input type="hidden"
                    name="id"
                    value={id}
                />
                <input
                    type="text"
                    className="form-control my-3 w-75"
                    placeholder="Nombre de usuario"
                    name="username"
                    value={username}
                    onChange={ onInputChange }/>

                { id > 0 ||
                    <input
                        type="password"
                        className="form-control my-3 w-75"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={ onInputChange }/> 
                }
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
                        { id === 0 ? 'Registrar Usuario' : 'Editar Usuario'}
                </button>

            </form>
        </>
    );
}

UsuarioFormulario.propTypes = {
    handlerAddUsuario: PropTypes.func.isRequired,
    usuarioInicialForm: PropTypes.object,
    usuarioSeleccionado: PropTypes.object,
}