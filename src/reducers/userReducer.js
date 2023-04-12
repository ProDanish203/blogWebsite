import { 
    SET_SINGLE_USER_BEGIN,
    SET_SINGLE_USER_SUCCESS,
    SET_SINGLE_USER_ERROR,
} from "../utils/constants";

const userReducer = (state, action) => {

    if(action.type == SET_SINGLE_USER_BEGIN){
        return{
            ...state,
            singleUserLoading: true
        }
    }
    else if(action.type == SET_SINGLE_USER_SUCCESS){
        return{
            ...state,
            singleUserLoading: false,
            singleUser: action.payload
        }
    }
    else if(action.type == SET_SINGLE_USER_ERROR){
        return{
            ...state,
            singleUserLoading: false,
            singleUserError: true
        }
    }
    else{
        return state;
    }

}

export default userReducer;
