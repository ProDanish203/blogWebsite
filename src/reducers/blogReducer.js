import {
    GET_BLOGS_BEGIN,
    GET_BLOGS_ERROR,
    GET_BLOGS_SUCCESS,
    GET_SINGLE_BLOG_BEGIN,
    GET_SINGLE_BLOG_ERROR,
    GET_SINGLE_BLOG_SUCCESS,
    GET_BLOGS_BY_SEARCHTERM_BEGIN,
    GET_BLOGS_BY_SEARCHTERM_ERROR,
    GET_BLOGS_BY_SEARCHTERM_SUCCESS,
    SET_SEARCH_TERM
} from "../utils/constants"

const blogsReducer = (state, action) => {

    if(action.type == GET_BLOGS_BEGIN){
        return {
            ...state,
            blogsLoading: true
        }
    }
    else if(action.type == GET_BLOGS_SUCCESS){
        return {
            ...state,
            blogsLoading: false,
            blogs: action.payload,
            temBlogs: action.payload
        }
    }
    else if(action.type == GET_BLOGS_ERROR){
        return {
            ...state,
            blogsLoading: false,
            blogsError: true
        }
    }
    else if(action.type == GET_SINGLE_BLOG_BEGIN){
        return {
            ...state,
            singleBlogLoading: true,
        }
    }
    else if(action.type == GET_SINGLE_BLOG_SUCCESS){
        return {
            ...state,
            singleBlogLoading: false,
            singleBlog: action.payload
        }
    }
    else if(action.type == GET_SINGLE_BLOG_ERROR){
        return {
            ...state,
            singleBlogLoading: false,
            singleBlogError: true
        }
    }
    else if(action.type == GET_SINGLE_BLOG_BEGIN){
        return {
            ...state,
            searchBlogsLoading: true,
        }
    }
    else if(action.type == GET_SINGLE_BLOG_SUCCESS){
        return {
            ...state,
            searchBlogsLoading: false,
            blogs: action.payload
        }
    }
    else if(action.type == GET_SINGLE_BLOG_ERROR){
        return {
            ...state,
            searchBlogsLoading: false,
            searchBlogsError: true
        }
    }
    else if(action.type == SET_SEARCH_TERM){
        return {
            ...state,
            searchTerm: action.payload
        }
    }
    else{
        return state;
    }


}
export default blogsReducer;