import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  newWidth: {
    width: '75ch',
  }
}));

function EditProduct({ match }: any) {
  const history = useHistory();
  let saveButton = (): void => console.log("save");
  let cancelButton = (): void =>
    match.params.validation === "-1" ? history.push(`/products`) : history.push(`/products/${match.params.productId}`);
  //if -1 then we are actually on addNewItem page 

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const title = match.params.validation === "-1" ? <h1>Save Product</h1> : <h1>Edit Product</h1>

  const classes = useStyles();

  const id = match.params.validation === "-1" ? match.params.id : match.params.productId
  return (
    <>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        {title}
      </Box>

      <h1>name : {name}</h1>
      <h1>category : {category}</h1>
      <h1>price : {price}</h1>
      <h1>image : {image}</h1>
      <h1>description : {description}</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="textFieldId"
          label="Id"
          InputProps={{ readOnly: true }}
          defaultValue={id}
          variant="outlined"
        />
        <TextField
          id="textFieldName"
          label="Name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="textFieldCategory"
          label="Category"
          variant="outlined"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <TextField
          id="textFieldPrice"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          id="textFieldImage"
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <TextField className={classes.newWidth}
          id="textFieldDescription"
          label="Description"
          variant="outlined"
          multiline
          rows='4'
          rowsMax={7}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </form>

      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Button variant="contained" color="primary" style={{ borderRadius: 5, margin: 7 }} onClick={() => cancelButton()}> Cancel </Button>
        <Button variant="contained" color="primary" style={{ borderRadius: 5, margin: 7 }} onClick={() => saveButton()}> Save </Button>
      </Box>
    </>
  );
}

export default EditProduct;
