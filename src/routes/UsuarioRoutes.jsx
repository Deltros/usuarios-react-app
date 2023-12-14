import { Navigate, Route, Routes } from "react-router-dom";
import { UsuariosPages } from "../pages/UsuariosPage";
import PropTypes from 'prop-types';
import { NavBar } from "../components/layout/NavBar";

export const UsuarioRoutes = ({ login, handlerLogout }) => {
    return (
        <>
            <NavBar login={login} handlerLogout={handlerLogout}></NavBar>
            <Routes>
                <Route path="users" element={ <UsuariosPages/> }/>
                <Route path="/" element={ <Navigate to="/users" /> }/>
            </Routes>
        </>
    );
}

UsuarioRoutes.propTypes = {
    login: PropTypes.object,
    handlerLogout: PropTypes.func,
}

