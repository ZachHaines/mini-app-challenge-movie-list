import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function FormDialog({title, movieID, list}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editMovieInDatabase = () => {
    const request = `http://localhost:8080/movies/${movieID}`
    const data = {
      title: document.getElementById("form-dialog").value
    };
    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    };
    fetch(request, init)
        .then(res => {
          if (!res.ok) throw new Error(`Error: ${res.status}`)
          return res.json()
        })
        .then(data => list.setMovies(data))
        .then(()=> setOpen(false));
  };
 

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={handleClickOpen}> {title} </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the movie title, enter the new text and then click submit.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="form-dialog"
            label="Movie Title"
            type="text"
            placeholder={title}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editMovieInDatabase}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
