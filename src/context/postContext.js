import { createContext, useState, useContext, useReducer, useEffect } from "react";
import {v4 as uuid} from 'uuid'

import {postsReducer} from '../reducers/postsReducer'

const PostContext = createContext({})

export function PostsContextProvider({children}){

    const [posts, postsDispatch] = useReducer(postsReducer, [])
    const [openModal, setOpenModal] = useState(false)
    const [modalPost, setModalPost] = useState({})
   

    const addPost = postText =>{
        const newPost = {
            text: postText,
            id: uuid()
        }
        postsDispatch({type: 'ADD_POST', newPost})
    }

    const deletePost = deletedPost => postsDispatch({type: 'DELETE_POST', deletedPost})          

    const editPost = editedPost => {
        setOpenModal(!openModal)
        postsDispatch({type: 'EDIT_POST', editedPost})
    }

    const toggleModal = (post, index) => {
        setOpenModal(!openModal)   
        setModalPost({...post, index: index})     
    }

    useEffect(()=>{
        let storagePosts
        try {
            storagePosts = JSON.parse(localStorage.getItem('posts')) || "[]"
        } catch(err) {
            console.error(err)
            storagePosts = []
        }
        postsDispatch({type: 'GET_POSTS', storagePosts})
    }, [])

    useEffect(()=>{
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    return(
        <PostContext.Provider value={{
            posts,
            addPost, 
            deletePost,
            editPost,
            modalPost,
            openModal, 
            toggleModal
        }}>
            {children}
        </PostContext.Provider>

    )
}

export const usePosts = ()=> {
    return useContext(PostContext)
}