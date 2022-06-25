import orders from "../../models/orders";
import { initializeApp } from "@firebase/app";
import { getFirestore, collection, getDocs, doc, addDoc, deleteDoc } from "@firebase/firestore";
export const DELETE_ORDER = 'DELETE_ORDER';
export const CREATE_ORDER = 'CREATE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const SET_ORDER = 'SET_ORDER';

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
const collectionReference = collection(db, 'orders');

export const fetchOrders = () => {
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
            new orders(
              itemsData[key].id,
              itemsData[key].title,
              itemsData[key].price,
              itemsData[key].userId,
              itemsData[key].address,
              itemsData[key].phone,
              itemsData[key].quantity,
              itemsData[key].name,
            )
          );
        }
      //  console.log(loadedProducts)
        dispatch({
            type: SET_ORDER,
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

export const deleteOrder = productId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
   

   const docRef = doc(db, 'orders', productId);
   deleteDoc(docRef).then(()=>{
     // Make a Toast Data Deleted
   })
    dispatch({ type: DELETE_ORDER, pid: productId });
  };
};

export const createOrder = (title, price, userId, address, phone, quantity, name) => {
  return async (dispatch, getState) => {
    // any async code you want!
    
    
    console.log(title)
    console.log(userId)
    // Adding Document
    addDoc(collectionReference, {
        title: title,
        price: price,
        userId:  userId,
        address: address,
        phone: phone,
        quantity:quantity,
        name: name,
        
    }).then(()=>{
      //
    })

    dispatch({
      type: CREATE_ORDER,
      productData: {
        title,
        price,
        userId: userId,
        address,
        phone,
        quantity,
        name, 
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
