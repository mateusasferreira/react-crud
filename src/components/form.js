import { useState } from "react";
import { usePosts } from "../context/postContext";
import { TextField, Button } from "@material-ui/core";


function PostsForm() {

  const [postText, setPostText] = useState('')
  
  const {addPost} = usePosts()
    

  return (
    <form action="submit" onSubmit={(e) => {
      e.preventDefault()
      
      addPost(postText)
    }} >
      <TextField
        onChange={(e) => setPostText(e.target.value)}
        id="outlined-multiline-static"
        placeholder="Share your thoughts"
        multiline
        rows={4}
        variant="outlined"
        fullWidth={true}
      />
      <Button type="submit" variant="contained" color="primary">
        Post
      </Button>
    </form>
  );
}

export default PostsForm;
