import item from "../../models/items";
import { initializeApp } from "@firebase/app";
import { getFirestore, collection, getDocs, doc, addDoc, deleteDoc } from "@firebase/firestore";
export const DELETE_ITEM = 'DELETE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SET_ITEM = 'SET_ITEM';

const firebaseConfig = {
    apiKey : "AIzaSyBcqTPv1woelu6Bjk5jQ2iIwIOvpmE-0aA",
    authDomain : "com.namal.OMS",
    projectId: "oms-fyp-a8be4",
    storageBucket: "oms-fyp-a8be4.appspot.com",
    messagingSenderId: "336511317970",
    appId: "1:336511317970:android:036ec26aa17c9a713c3a0b"
}

//initializing firebase app
initializeApp(firebaseConfig);
//initialize services
const db = getFirestore();
// Collection reference 
const collectionReference = collection(db, 'Items');

export const fetchItems = () => {
    const loadedProducts = [];
  return async (dispatch, getState) => {
    // any async code you want!
    try {
        // Getting Collection Data
        let itemsData = [];
        getDocs(collectionReference).then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
           itemsData.push({...doc.data(), id: doc.id})
        })
        for (const key in itemsData) {
          loadedProducts.push(
            new item(
              itemsData[key].id,
              itemsData[key].title,
              itemsData[key].price,
              itemsData[key].URI,
              itemsData[key].categoryId,
              itemsData[key].brandId,
              itemsData[key].description,
              itemsData[key].quantity,
              itemsData[key].userId,
            )
          );
        }
      //  console.log(loadedProducts)
        dispatch({
            type: SET_ITEM,
            products: loadedProducts,
            userProducts: loadedProducts,
          });
        }).catch(err =>{
            console.log(err.message)
        })
  
     
    }   
    catch (err) {
      // send to custom analytics server
      throw err;
    }
    
  };
};

export const deleteItem = productId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
   

   const docRef = doc(db, 'Items', productId);
   deleteDoc(docRef).then(()=>{
     // Make a Toast Data Deleted
   })
    dispatch({ type: DELETE_ITEM, pid: productId });
  };
};

export const createItem = (title, price, URI, categoryId, brandId, description, quantity,  userId) => {
  return async (dispatch, getState) => {
    // any async code you want!
    
    
   // console.log(title)
   // console.log(userId)
    // Adding Document
    addDoc(collectionReference, {
        title: title,
        price: price,
        URI: URI,
        categoryId: categoryId,
        brandId: brandId,
        description: description,
        quantity: quantity,
        userId:  userId,
        
    }).then(()=>{
      //
    })

    dispatch({
      type: CREATE_ITEM,
      productData: {
        title,
        price,
        URI,
        categoryId,
        brandId,
        description,
        quantity,
        userId: userId, 
      }
    });

  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://shops-88935-default-rtdb.asia-southeast1.firebasedatabase.app/products${id}.json?auth=${token}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    dispatch({
      type: UPDATE_SHOP,
      pid: id,
      productData: {
        title,
        description,
        imageUrl
      }
    });
  };
};
