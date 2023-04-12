import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../utils/constants";

const  sidebarReducer  = (state, action) => {

    if(action.type == OPEN_SIDEBAR){
        return {
            ...state, 
            isSidebarOpen: true
        }
    }
    else if(action.type == CLOSE_SIDEBAR){
        return {
            ...state, 
            isSidebarOpen: false
        }
    }
    else{
        return false;
    }

    // switch(action.type){
    //     case OPEN_SIDEBAR:
    //         return {
    //             ...state, 
    //             isSidebarOpen: true
    //         }
    //     case CLOSE_SIDEBAR:
    //         return {
    //             ...state, 
    //             isSidebarOpen: false
    //         }      
    //     default:
    //         return false;
    // }


}
export default sidebarReducer;