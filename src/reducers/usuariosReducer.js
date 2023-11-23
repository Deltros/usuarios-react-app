
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
    
        default:
            return state;
    }
}