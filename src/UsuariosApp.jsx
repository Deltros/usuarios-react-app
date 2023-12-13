import { UsuariosPages } from "./pages/UsuariosPage";
import { LoginPage } from "./auth/pages/LoginPage";
import { NavBar } from "./components/layout/NavBar";
import { useAuth } from "./auth/hooks/useAuth";

export const UsuariosApp = () => {

    const {login, handlerLogin, handlerLogout} = useAuth();

    return (
        <>
            { login.isAuth 
                ? 
                    <>
                        <NavBar login={login} handlerLogout={handlerLogout}></NavBar>
                        <UsuariosPages/>
                    </>

                : <LoginPage handlerLogin={handlerLogin}/>
            }
        </>
    );
}