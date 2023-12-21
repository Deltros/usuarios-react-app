/* eslint-disable react/prop-types */
import { UsuarioModalFormulario } from "../components/UsuarioModalFormulario";
import { UsuariosLista } from "../components/UsuariosLista";

export const UsuariosPages = ({         
        usuarios,
        usuarioSeleccionado,
        usuarioInicialForm,
        formularioVisible,
        handlerAddUsuario,
        handlerRemoveUsuario,
        handlerSeleccionarUsuarioForm,
        handlerAbrirFormulario,
        handlerCerrarFormulario,
    }) => {

    return (
        <>
            { !formularioVisible || 
                <UsuarioModalFormulario
                    handlerAddUsuario={handlerAddUsuario} 
                    handlerCerrarFormulario={handlerCerrarFormulario}
                    usuarioInicialForm={usuarioInicialForm}
                    usuarioSeleccionado={usuarioSeleccionado}
                />
            }

            <div className="container my-4">
                <h2>Usuarios</h2>

                <div className="row my-4">

                    <div className="col">

                        { formularioVisible || 
                            <button 
                                className="btn btn-primary my-2"
                                onClick={handlerAbrirFormulario}>
                                    Nuevo usuario
                            </button>
                        }

                        { 
                            usuarios.length == 0 ?
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
        </>
    );
}
