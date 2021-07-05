export const postsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return action.storagePosts
        case 'ADD_POST':
            return [...state, action.newPost]
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.deletedPost.id)
        case 'EDIT_POST':
            state.splice(action.editedPost.index, 1, action.editedPost)
            return [...state]
        default:
            break;
    }
}