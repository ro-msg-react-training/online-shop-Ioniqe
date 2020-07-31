import React, { useState } from 'react';
import { addProduct } from '../redux';
import { connect } from 'react-redux'
import { IProductDetailsReady } from '../types/types';

// interface ITestContainer {
//   addProduct: (product: IProductDetailsReady) => void,
//   newProduct: {
//     loading: boolean,
//     product: IProductDetailsReady,
//     error: string
//   }
// }

function NewProductContainer(props: any) {
  // useEffect(() => {
  //   addProduct(newProduct.product)
  // }, [])

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  let makeProduct = (id: string, name: string, category: string, price: string, image: string, description: string): IProductDetailsReady => {
    const product: IProductDetailsReady = { id: Number(id), name: name, category: category, price: Number(price), image: image, description: description };
    return product;
  }

  return <div>
    {/* <h2>Number of cakes - {props.numOfCakes} </h2> */}
    <input type='text' value={id} onChange={e => setId(e.target.value)} />
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
    <input type='text' value={category}  onChange={e => setCategory(e.target.value)} />
    <input type='text' value={price} onChange={e => setPrice(e.target.value)} />
    <input type='text' value={image} onChange={e => setImage(e.target.value)} />
    <input type='text' value={description}  onChange={e => setDescription(e.target.value)} />
    <button onClick={() => props.addProduct(makeProduct(id, name, category, price, image, description))}>Add</button>
  </div>

}

const mapStateToProps = (state: any) => {
  return {
    newProduct: state.newProduct //from rootReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addProduct: (newProduct: IProductDetailsReady) => dispatch(addProduct(newProduct))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductContainer);

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { Button, TextField, makeStyles, Box } from '@material-ui/core';
// import { addProduct, addProductRequest } from '../redux/newProduct/newProductActions';
// import { IProductDetailsReady } from '../types/types';
// import { connect } from 'react-redux';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
//   newWidth: {
//     width: '75ch',
//   }
// }));

// function NewProductContainer({ match }: any) {
//   const history = useHistory();
//   let saveButton = (): void => {
//     //TODO VERIFY IF ADD OR EDIT
//     const newProduct = {id: Number(match.params.id), name: name, category: category, price: Number(price), image: image, description: description} //ADD
//     // const newProduct = {id: match.params.productId, name: name, category: category, price: price, image: image, description: description} //EDIT
//     addProduct(newProduct);
//   }
//   let cancelButton = (): void => history.push(`/products`)
//     // match.params.id === "-1" ? history.push(`/products`) : history.push(`/products/${match.params.productId}`);
//   //if -1 then we are actually on addNewItem page 

//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   // const title = match.params.id === "-1" ? <h1>Save Product</h1> : <h1>Edit Product</h1>
//   const title = <h1>Save Product</h1>

//   const id = match.params.id 

//   const classes = useStyles();
//   return (
//     <>
//       <Box display="flex" justifyContent="center" m={1} p={1}>
//         {title}
//       </Box>

//       <h1>name : {name}</h1>
//       <h1>category : {category}</h1>
//       <h1>price : {price}</h1>
//       <h1>image : {image}</h1>
//       <h1>description : {description}</h1>

//       <form className={classes.root} noValidate autoComplete="off">
//         <TextField
//           id="textFieldId"
//           label="Id"
//           InputProps={{ readOnly: true }}
//           defaultValue={id}
//           variant="outlined"
//         />
//         <TextField
//           id="textFieldName"
//           label="Name"
//           variant="outlined"
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//         <TextField
//           id="textFieldCategory"
//           label="Category"
//           variant="outlined"
//           value={category}
//           onChange={e => setCategory(e.target.value)}
//         />
//         <TextField
//           id="textFieldPrice"
//           label="Price"
//           variant="outlined"
//           value={price}
//           onChange={e => setPrice(e.target.value)}
//         />
//         <TextField
//           id="textFieldImage"
//           label="Image"
//           variant="outlined"
//           value={image}
//           onChange={e => setImage(e.target.value)}
//         />
//         <TextField className={classes.newWidth}
//           id="textFieldDescription"
//           label="Description"
//           variant="outlined"
//           multiline
//           rows='4'
//           rowsMax={7}
//           value={description}
//           onChange={e => setDescription(e.target.value)}
//         />
//       </form>

//       <Box display="flex" justifyContent="center" m={1} p={1}>
//         <Button variant="contained" color="primary" style={{ borderRadius: 5, margin: 7 }} onClick={() => cancelButton()}> Cancel </Button>
//         <Button variant="contained" color="primary" style={{ borderRadius: 5, margin: 7 }} onClick={() => saveButton()}> Save </Button>
//       </Box>
//     </>
//   );
// }


// const mapStateToProps = (state: any) => {
//   return {
//     productList: state.newProduct //from rootReducer
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     addProduct: (newProduct: IProductDetailsReady) => dispatch(addProduct(newProduct))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NewProductContainer);
