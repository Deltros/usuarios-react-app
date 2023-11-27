import { UsuarioFormulario } from "./components/UsuarioFormulario";
import { UsuariosLista } from "./components/UsuariosLista";
import { useUsuarios } from "./hooks/useUsuarios";

export const UsuariosApp = () => {

    const {         
        usuarios,
        usuarioSeleccionado,
        usuarioInicialForm,
        handlerAddUsuario,
        handlerRemoveUsuario,
        handlerSeleccionarUsuarioForm 
    } = useUsuarios();

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

                    { usuarios.length == 0 ?
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