import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const UsuarioRow = ({ id, username, email, handlerRemoveUsuario, handlerSeleccionarUsuarioForm }) => {

    return (
        <>
            <tr>
                <td>{ id }</td>
                <td>{ username }</td>
                <td>{ email }</td>
                <td>
                    <button 
                        type='button'
                        className='btn btn-secondary btn-sm'
                        onClick={
                            () => handlerSeleccionarUsuarioForm(
                                {
                                    id:id,
                                    username: username,
                                    email:email,
                                }
                            )
                        }>
                            Update
                    </button>
                </td>
                <td>
                    <NavLink className={'btn btn-secondary btn-sm'} 
                        to={'/users/edit/' + id} >
                            update route
                        </NavLink>
                </td>
                <td>
                    <button
                        type='button'
                        className='btn btn-danger btn-sm'
                        onClick={() => handlerRemoveUsuario(id)}>
                            Eliminar
                    </button>
                </td>
            </tr>
        </>
    )
}

UsuarioRow.propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    handlerRemoveUsuario: PropTypes.func.isRequired,
    handlerSeleccionarUsuarioForm: PropTypes.func.isRequired,
}