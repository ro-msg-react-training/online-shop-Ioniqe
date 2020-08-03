import React, { useState } from 'react';
import { addProduct, editProduct } from '../redux';
import { connect } from 'react-redux'
import { IProductDetailsReady } from '../types/types';
import { Button, TextField, makeStyles, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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

interface Props {
  match: any,
  addProductF: (newProduct: IProductDetailsReady) => void
  editProductF: (newProduct: IProductDetailsReady) => void
  newProduct: {
    loading: boolean,
    product: IProductDetailsReady,
    error: string
  },
  editProduct: {
    loading: boolean,
    product: IProductDetailsReady,
    error: string
  }
}

function ModifyProductContainer(props: Props) {
  const history = useHistory();
  const classes = useStyles();

  let nameValidator = false;
  let categoryValidator = false;
  let priceValidator = false;
  let imageValidator = false;
  let descriptionValidator = false;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  let validateName = (): void => { name === "" ? nameValidator = false : nameValidator = true }

  let verifyInput = (): void => {
    let ok = true;
    if (name === "") {
      ok = false;
      nameValidator = true;
    }

    if (category === "") {
      ok = false;
      categoryValidator = true;
    }

    if (image === "") {
      ok = false;
      imageValidator = true;
    }

    if (description === "") {
      ok = false;
      descriptionValidator = true;
    }

    if (isNaN(Number(price))) {
      ok = false;
      priceValidator = true;
    }

    if (ok)
      chooseAction()
    else alert("Input not good");
  }


  let makeProduct = (id: string, name: string, category: string, price: string, image: string, description: string): IProductDetailsReady => {
    const product: IProductDetailsReady = { id: Number(id), name: name, category: category, price: Number(price), image: image, description: description };
    return product;
  }

  let cancelButton = (): void =>
    props.match.params.validation === "-1" ? history.push('/products') : history.push(`/products/${props.match.params.id}`);
  //if -1 then we are actually on addNewItem page 

  let chooseAction = (): void => {
    props.match.params.validation === "-1" ? props.addProductF(makeProduct(id, name, category, price, image, description)) :
      props.editProductF(makeProduct(id, name, category, price, image, description))

    history.push('/products');
  }

  const id = props.match.params.id
  return <div>
    <form className={classes.root} noValidate autoComplete="off">

      <TextField
        id="textFieldId"
        label="id"
        InputProps={{ readOnly: true }}
        defaultValue={id}
        variant="outlined"
      />
      <TextField
        id="textFieldName"
        label="Name"
        variant="outlined"
        value={name}
        onChange={e => { setName(e.target.value); validateName(); }}
        required
        error={nameValidator}
        helperText={nameValidator ? "Name must be not null" : ""}
      />
      <TextField
        id="textFieldCategory"
        label="Category"
        variant="outlined"
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
        error={categoryValidator}
        helperText={categoryValidator ? "Category must not be null" : ""}
      />
      <TextField
        id="textFieldPrice"
        label="Price"
        variant="outlined"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
        error={priceValidator}
        helperText={priceValidator ? "Price must be a non-null, numeric value" : ""}
      />
      <TextField
        id="textFieldImage"
        label="Image"
        variant="outlined"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
        error={imageValidator}
        helperText={imageValidator ? "Image url must not be null" : ""}
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
        required
        error={descriptionValidator}
        helperText={descriptionValidator ? "Description must not be null" : ""}
      />
    </form>

    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Button variant="contained" color="primary" style={{ borderRadius: 5, margin: 7 }} onClick={() => verifyInput()}> Save </Button>
      <Button variant="contained" color="primary" style={{ borderRadius: 5, margin: 7 }} onClick={() => cancelButton()}> Cancel </Button>
    </Box>
  </div>
}

const mapStateToProps = (state: any) => {
  return {
    newProduct: state.newProduct, //from rootReducer
    editProduct: state.editProduct //from rootReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addProductF: (newProduct: IProductDetailsReady) => dispatch(addProduct(newProduct)),
    editProductF: (newProduct: IProductDetailsReady) => dispatch(editProduct(newProduct))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProductContainer);
