import { ALL_CONTRACTS, LOADING, PENDING_CONTRACTS, PURCHASED_CONTRACTS } from "../../actions/admin/types";

const INITIAL_STATE = {
    loading: false,
    allContracts: [],
    pendingContracts: [],
    purchasedContracts: [],
}

const AdminReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case ALL_CONTRACTS: {
            return {
                ...state,
                allContracts: action.payload
            }
        }
        case PENDING_CONTRACTS: {
            return {
                ...state,
                pendingContracts: action.payload
            }
        }
        case PURCHASED_CONTRACTS: {
            return {
                ...state,
                purchasedContracts: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default AdminReducer;
