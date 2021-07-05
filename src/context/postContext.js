import { createContext, useState, useContext, useReducer } from "react";
import {v4 as uuid} from 'uuid'

import {postsReducer} from '../reducers/postsReducer'

const PostContext = createContext({})

export function PostsContextProvider({children}){

    const [posts, postsDispatch] = useReducer(postsReducer, [])
    const [openModal, setOpenModal] = useState(false)
    const [modalPost, setModalPost] = useState({})

    

    function addPost (postText){
        const newPost = {
            text: postText,
            id: uuid()
        }
        postsDispatch({type: 'ADD_POST', newPost})
        console.log(posts)
    }

    function deletePost (deletedPost) {
        postsDispatch({type: 'DELETE_POST', deletedPost})          
     
    }

    function editPost(editedPost){
        setOpenModal(!openModal)
        postsDispatch({type: 'EDIT_POST', editedPost})
    }

    const toggleModal = (post, index) => {
        setOpenModal(!openModal)   
        setModalPost({...post, index: index})     
    }

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