import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {FormControl, InputLabel, OutlinedInput, Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const AddNewSeriesModal = ({id, open, onClose, addToSeries}) => {
    console.log("ID",id);
    const [subject, setSubject] = useState({
        id: "",
        name: "",
        rating: ""
    });

    useEffect(() => {
        if (id) {
            setSubject((prev) => ({ ...prev, id: id }));
        }
    }, [id]);

    const handleModalSubmission = () => {
    addToSeries(subject);
    setSubject({ id: "", name: "", rating: "" });
        onClose();
    }
  return (
    <Modal
    open={open}
  >

        <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >

    <FormControl fullWidth required>
        <Button>
            <CloseIcon onClick={onClose}/>
        </Button>
  <div><InputLabel htmlFor="name-input">Name</InputLabel>
  <OutlinedInput id="name-input" value={subject.name} placeholder="Write your name here" label="Name" onChange={(e) => setSubject({ ...subject, name: e.target.value })}/>
  </div>
</FormControl>


<FormControl fullWidth required>
  <div>
  <InputLabel htmlFor="rating-input">Rating</InputLabel>
  <OutlinedInput id="rating-input" value={subject.rating} placeholder="1-5" label="Rating" onChange={(e) => setSubject({ ...subject, rating: e.target.value })
}/>
  </div>

</FormControl>
<Button
onClick={handleModalSubmission}>Add Review</Button>
      </Box>
        </Modal>
  )
}
