import {useState}from 'react';
import { Button, TextField, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Dialogtitle } from '@material-ui/core';
import {usePosts} from '../context/postContext'

function Modal() {
  
  const [editedPost, setEditedPost] = useState({})

  const {openModal, toggleModal, editPost, modalPost} = usePosts()


  return (
    <div>
     <Dialog open={openModal}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={(e) => setEditedPost({id: modalPost.id, text: e.target.value, index: modalPost.index})}
            id="outlined-multiline-static"
            defaultValue={modalPost.text}
            multiline
            rows={4}
            variant="outlined"
            fullWidth={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleModal} color="primary">
            Cancel
          </Button>
          <Button onClick={()=> editPost(editedPost)} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;