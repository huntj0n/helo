const initialState = {
    user: {
        username: '',
        id: '',
        profile_pic: ''
    },
    isLoggedIn: false
}

const LOGIN_USER = "LOGIN_USER"

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOGIN_USER:
            return {...state, user: payload, isLoggedIn: true}
        default:
            return state;
    }
}