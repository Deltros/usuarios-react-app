import PropTypes from 'prop-types';

export const UsuarioRow = ({ id, username, email }) => {
    return (
        <>
            <tr>
                <td>{ id }</td>
                <td>{ username }</td>
                <td>{ email }</td>
                <td><button 
                        type='button'
                        className='btn btn-secondary btn-sm'>
                            Update
                    </button>
                </td>
                <td>
                    <button
                        type='button'
                        className='btn btn-danger btn-sm'>
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
}