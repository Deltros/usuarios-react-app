
export const usuariosReducer = (state = [], action) => {
    switch (action.type) {
        case 'addUsuario':
            
        return [
            ...state,
            {
                ...action.payload,
                id: new Date().getTime(),

            }
        ]

        case 'removeUsuario':
            return state.filter((usuario) => usuario.id!=action.payload);

        case 'updateUsuario':
            return state.map((usuario) => {
                if (usuario.id === action.payload.id) {
                    return {
                        ...action.payload,
                        password: usuario.password
                    };
                }
                return usuario;
            });
    
        default:
            return state;
    }
}