import { useState } from "react";
import { usePosts } from "../context/postContext";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    marginBottom: '2rem'
  },
  input: {
    marginBottom: '1rem'
  }
})

function PostsForm() {

  const [postText, setPostText] = useState('')
  
  const {addPost} = usePosts()
  
  const classes = useStyles()

  const handlePost = () => {
      
      addPost(postText)

      setPostText('')
  }

  return (
    <form action="submit" className={classes.form} onSubmit={(e) => {
      e.preventDefault()
      handlePost()
    }} >
      <TextField
        className={classes.input}
        onChange={(e) => setPostText(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handlePost()}
        id="outlined-multiline-static"
        value={postText}
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
