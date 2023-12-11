import { useState } from "react";
import Swal from "sweetalert2";

const loginFormInicial = {
    username: '',
    password: '',
}
export const LoginPage = () => {

    const [loginForm, setLoginForm] = useState(loginFormInicial);

    const {username, password} = loginForm;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setLoginForm({
            ...loginForm,
            [ name ]: value,
        });
    }

    const onSubmit = (event) => {

        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validacion', 'Debe llenar todos los campos', 'error');
        }

        //Implementar backend
        if (username === 'admin' && password === '123456') {
            //handlerlogin
        } else {
            Swal.fire('Error de validacion', 'Nombre de usuario o contraseña incorrectos', 'error');
        }

        setLoginForm(loginFormInicial);
    }

    return (
        <div className="modal" style={ {display: 'block'} } tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input className="form-control my-3 w-75" 
                                placeholder="Usuario" 
                                name="username"
                                value={username}
                                onChange={ onInputChange }
                            />
                            <input 
                                type="password"
                                className="form-control my-3 w-75" 
                                placeholder="Contraseña" 
                                name="password" 
                                value={password}
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    );
}