import PropTypes from 'prop-types';
import { UsuarioRow } from './UsuarioRow';

export const UsuariosLista = ({ usuarios = [], handlerRemoveUsuario, handlerSeleccionarUsuarioForm }) => {

    return (

        <table className='table table-hover table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>nombre</th>
                    <th>email</th>
                    <th>update</th>
                    <th>update route</th>
                    <th>eliminar</th>
                </tr>
            </thead>
            <tbody>

                {
                    usuarios.map(({ id, username, email }) => (
                        <UsuarioRow 
                            key = {id}
                            id={id}
                            username={username}
                            email={email}
                            handlerRemoveUsuario={handlerRemoveUsuario}
                            handlerSeleccionarUsuarioForm={handlerSeleccionarUsuarioForm}
                        />
                    ))
                }

            </tbody>
        </table>

    );
}

UsuariosLista.propTypes = {
    usuarios: PropTypes.array.isRequired,
    handlerRemoveUsuario: PropTypes.func.isRequired,
    handlerSeleccionarUsuarioForm: PropTypes.func.isRequired,
}