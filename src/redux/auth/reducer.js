import { USER_LOGIN, USER_LOGOUT } from "./constant";

let initialState = localStorage.getItem('Auth')
    ? JSON.parse(localStorage.getItem('Auth')) :
    { token: null, refreshToken: null, role: null };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                token: action.token,
                refreshToken: action.refreshToken,
                role: action.role,
            }
        case USER_LOGOUT:
            return {
                token: null,
                role: null,
                refreshToken: null,
            }
        default:
            return state;
    }
};

