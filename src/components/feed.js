import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { usePosts } from "../context/postContext";



function Feed() {
  const { posts, deletePost, toggleModal } = usePosts();

  return (
    <List>
      {posts.map((post, index) => (
          <ListItem key={index}>
              <ListItemText>{post.text}</ListItemText>
              <Button onClick={()=> deletePost(post.id)} variant="contained" color="secondary">Excluir</Button>
              <Button onClick={()=> toggleModal(post, index)} variant="contained" color="default">Editar</Button>
          </ListItem>
      ))}
    </List>
  );
}

export default Feed;
