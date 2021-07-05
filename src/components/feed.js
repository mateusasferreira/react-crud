import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { usePosts } from "../context/postContext";
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles({
  post: {
    display: 'flex',
    gap: '1rem',
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: '5px',
    marginBottom: '.5rem'
  },
})


function Feed() {
  const { posts, deletePost, toggleModal } = usePosts();

  const classes = useStyles()

  

  return (
    <List>
      {posts.map((post, index) => (
          <ListItem className={classes.post} key={index}>
              <ListItemText >{post.text}</ListItemText>
              <Button onClick={()=> deletePost(post)} variant="contained" color="secondary">Delete</Button>
              <Button onClick={()=> toggleModal(post, index)} variant="contained" color="default">Edit</Button>
          </ListItem>
      ))}
    </List>
  );
}

export default Feed;
