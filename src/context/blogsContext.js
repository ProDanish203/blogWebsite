import React, { createContext, useContext, useEffect, useReducer } from "react";
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
import reducer from "../reducers/blogReducer";

import axios from "../api/axios"
import { BLOG_URL } from "../utils/constants";
import { SEARCH_URL } from "../utils/constants";

const initialtState = {
    blogsLoading: false, 
    blogsError: false,
    blogs: [],
    tempBlogs: [],
    singleBlogLoading: false,
    singleBlogError: false,
    singleBlog: [],
    searchTerm: "",
    searchBlogsLoading: false,
    searchBlogsError: false,
}

const BlogsContext = createContext({});

export const BlogsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialtState);
    
    const fetchBlogs = async() => {
        dispatch({type: GET_BLOGS_BEGIN});
        try{
            const response = await axios.get(BLOG_URL);
            dispatch({
                type: GET_BLOGS_SUCCESS,
                payload: response.data.posts
            })
        }catch(err){
            console.log(err)
            dispatch({ type: GET_BLOGS_ERROR});
        }
    }

    const fetchSingleBlog = async(id) => {
        
        dispatch({ type: GET_SINGLE_BLOG_BEGIN});
        try{
            const response = await axios.get(`${BLOG_URL}/${id}`);
            dispatch({ 
                type: GET_SINGLE_BLOG_SUCCESS,
                payload: response.data
            });
        }catch(err){
            console.log(err);
            dispatch({ type: GET_SINGLE_BLOG_ERROR});
        }

    }

    const fetchBlogsFromSearch = async(searchTerm) => {
        console.log(searchTerm)
        dispatch({ type: GET_BLOGS_BY_SEARCHTERM_BEGIN});
        try{

            const response = await axios.get(`${SEARCH_URL}`);
            dispatch({
                type: GET_BLOGS_BY_SEARCHTERM_SUCCESS,
                payload: response.data.posts
            })

        }catch(err){
            console.log(err)
            dispatch({ type: GET_BLOGS_BY_SEARCHTERM_ERROR});
        }
    }

    const setSearchTerm = (searchTerm) => {
        dispatch({ type: SET_SEARCH_TERM, payload: searchTerm});
    }

    useEffect(() => {
        fetchBlogs();
    }, [])
    

    return (
<>
        <BlogsContext.Provider value={{
            ...state,
            fetchSingleBlog,
            fetchBlogsFromSearch,
            setSearchTerm
        }}>
            {children}
        </BlogsContext.Provider>
</>
        
    )

}

export const UseBlogsContext = () => {
    return useContext(BlogsContext);
}