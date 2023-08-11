import { IS_ADMIN_LOGIN, PROFILE_DETAILS } from "../../actions/auth/types";

const INITIAL_STATE = {
    profileDetails: {},
    isAdminLogin: false,
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PROFILE_DETAILS: {
            return {
                ...state,
                profileDetails: action.payload
            }
        }
        case IS_ADMIN_LOGIN: {
            return {
                ...state,
                isAdminLogin: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default AuthReducer;
