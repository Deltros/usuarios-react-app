import { Navigate, Route, Routes } from "react-router-dom";
import { UsuariosPages } from "../pages/UsuariosPage";
import PropTypes from 'prop-types';
import { NavBar } from "../components/layout/NavBar";
import { RegistrarUsuarioPage } from "../pages/RegistrarUsuarioPage";
import { useUsuarios } from "../hooks/useUsuarios";


export const UsuarioRoutes = ({ login, handlerLogout }) => {

    const {         
        usuarios,
        usuarioSeleccionado,
        usuarioInicialForm,
        formularioVisible,
        handlerAddUsuario,
        handlerRemoveUsuario,
        handlerSeleccionarUsuarioForm,
        handlerAbrirFormulario,
        handlerCerrarFormulario,
    } = useUsuarios();

    return (
        <>
            <NavBar login={login} handlerLogout={handlerLogout}></NavBar>
            <Routes>

                <Route path="users" element={ <UsuariosPages
                    usuarios={usuarios}
                    usuarioSeleccionado={usuarioSeleccionado}
                    usuarioInicialForm={usuarioInicialForm}
                    formularioVisible={formularioVisible}
                    handlerAddUsuario={handlerAddUsuario}
                    handlerRemoveUsuario={handlerRemoveUsuario}
                    handlerSeleccionarUsuarioForm={handlerSeleccionarUsuarioForm}
                    handlerAbrirFormulario={handlerAbrirFormulario}
                    handlerCerrarFormulario={handlerCerrarFormulario}
                /> }/>

                <Route path="users/register" 
                    element={<RegistrarUsuarioPage 
                        handlerAddUsuario={handlerAddUsuario}
                        usuarioInicialForm={usuarioInicialForm}
                />}/>

                <Route path="users/edit/:id" 
                    element={<RegistrarUsuarioPage 
                        usuarios={usuarios}
                        handlerAddUsuario={handlerAddUsuario}
                        usuarioInicialForm={usuarioInicialForm}
                />}/>

                <Route path="/" element={ <Navigate to="/users" /> }/>

            </Routes>
        </>
    );
}

UsuarioRoutes.propTypes = {
    login: PropTypes.object,
    handlerLogout: PropTypes.func,
}

