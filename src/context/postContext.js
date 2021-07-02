import { createContext, useState, useContext } from "react";
import {v4 as uuid} from 'uuid'


const PostContext = createContext({})

export function PostsContextProvider({children}){
    const [posts, setPosts] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [modalPost, setModalPost] = useState({})


    function addPost (postText){
        const newPost = {
            text: postText,
            id: uuid()
        }
        setPosts([...posts, newPost])
    }

    function deletePost (id) {
               
        setPosts(posts.filter(post => post.id !== id))
        posts.forEach(post => console.log(post.id))
    }

    function editPost(editedPost, index){
        setOpenModal(!openModal)
        const newPostsArray = posts.splice(index, 1, editedPost)
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