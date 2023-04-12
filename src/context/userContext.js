import React, {createContext, useContext, useEffect, useReducer} from "react";
import axios from "../api/axios";
import { 
    SET_SINGLE_USER_BEGIN,
    SET_SINGLE_USER_SUCCESS,
    SET_SINGLE_USER_ERROR,
} from "../utils/constants";
import reducer from "../reducers/userReducer";

import { USER_URL } from "../utils/constants";

const initialState = {
    singleUserLoading: false,
    singleUserError: false,
    singleUser: []
}

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchSingleUser = async(id) => {
        dispatch({ type: SET_SINGLE_USER_BEGIN });
        try{
            const response = await axios.get(`${USER_URL}/${id}`)
            const singleUser = response.data.users;
            dispatch({ 
                type: SET_SINGLE_USER_SUCCESS,
                paylaod: singleUser
            })
        }catch(err) {
            console.log(err)
            dispatch({ type: SET_SINGLE_USER_ERROR});
        }
    }

    return (

        <>
        <UserContext.Provider value={{
            ...state,
            fetchSingleUser
        }}>
            {children}
        </UserContext.Provider>
        </>

    )

}

export const useUserContext = () => {
    return useContext(UserContext);
}