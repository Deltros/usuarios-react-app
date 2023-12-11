import { UsuarioFormulario } from "./UsuarioFormulario";
import PropTypes from 'prop-types';

export const UsuarioModalFormulario = ( {handlerAddUsuario, handlerCerrarFormulario, usuarioInicialForm, usuarioSeleccionado}) => {

    return (
        <>
            <div className="abrir-modal animacion fadeIn">
                <div className="modal" style={ {display: "block"} } tabIndex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    { usuarioSeleccionado > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                                </h5>
                            </div>
                            <div className="modal-body">

                                <UsuarioFormulario
                                    handlerAddUsuario={handlerAddUsuario} 
                                    handlerCerrarFormulario={handlerCerrarFormulario}
                                    usuarioInicialForm={usuarioInicialForm}
                                    usuarioSeleccionado={usuarioSeleccionado}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

UsuarioModalFormulario.propTypes = {
    handlerAddUsuario: PropTypes.func.isRequired,
    usuarioInicialForm: PropTypes.object,
    usuarioSeleccionado: PropTypes.object,
    handlerCerrarFormulario: PropTypes.func.isRequired,
}