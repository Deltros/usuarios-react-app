import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UsuarioRoutes } from "./routes/UsuarioRoutes";

export const UsuariosApp = () => {

    const {login, handlerLogin, handlerLogout} = useAuth();

    return (
        <Routes>
            { login.isAuth 
                ? 
                    <Route path='/*' element={ <UsuarioRoutes 
                        login={login} 
                        handlerLogout={handlerLogout}/> }
                    />

                : 
                    <>
                        <Route path='/login' 
                            element={ <LoginPage handlerLogin={handlerLogin}/> }
                        />

                        <Route path="/*" element={ <Navigate to="/login"/> }/>
                    </>
            }
        </Routes>
    );
}