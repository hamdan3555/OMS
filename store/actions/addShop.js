import shops from "../../models/shops";
import { initializeApp } from "@firebase/app";
import { getFirestore, collection, getDocs, doc, addDoc, deleteDoc } from "@firebase/firestore";
export const DELETE_SHOP = 'DELETE_SHOP';
export const CREATE_SHOP = 'CREATE_SHOP';
export const UPDATE_SHOP = 'UPDATE_SHOP';
export const SET_SHOP = 'SET_SHOP';



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
const collectionReference = collection(db, 'Shops');

export const fetchShops = () => {
    const loadedProducts = [];
  return async (dispatch, getState) => {
    // any async code you want!
    try {
        // Getting Collection Data
        let shopsData = [];
        getDocs(collectionReference).then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
           shopsData.push({...doc.data(), id: doc.id})
        })
        for (const key in shopsData) {
          loadedProducts.push(
            new shops(
              shopsData[key].id,
              shopsData[key].title,
              shopsData[key].address,
              shopsData[key].description,
              shopsData[key].userId,
              shopsData[key].email,
              shopsData[key].phone
            )
          );
        }
        
       // console.log(loadedProducts)
        dispatch({
            type: SET_SHOP,
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

export const deleteShop = productId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
   

   const docRef = doc(db, 'Shops', productId);
   deleteDoc(docRef).then(()=>{
     // Make a Toast Data Deleted
   })
    dispatch({ type: DELETE_SHOP, pid: productId });
  };
};

export const createShop = (userId, title, address, description,  phone, email) => {
  return async (dispatch, getState) => {
    // any async code you want!
    
    
    console.log(title)
    console.log(userId)
    // Adding Document
    addDoc(collectionReference, {
      id:userId,
        title: title,
        address: address,
        description: description,
        userId:  userId,
        email:  email,
        phone:  phone
    }).then(()=>{
      //
    })

    dispatch({
      type: CREATE_SHOP,
      productData: {
        title,
        address,
        description,
        userId: userId,
        email, 
        phone, 
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
