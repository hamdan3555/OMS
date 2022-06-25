import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Button,
  FlatList,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet, LogBox
} from 'react-native';
import Colors from '../../constants/Colors';
import { ITEMS } from '../../Data/dummydata';

import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from '../../store/actions/addItem';

const ProductDetails = props => {

  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.items.availableProducts.find(prod => prod.id === productId)
  );

  const dispatch = useDispatch();
  //dispatch(productsActions.fetchItems());
 // console.log(selectedProduct)
  useEffect(()=>{
      LogBox.ignoreLogs(['Setting a timer for a long period of time'])
     });
     
  return (
    <View style={styles.centered}>
    <View style={styles.productContainer}>
   <View style={styles.imageContainer}>
   <Image style={styles.image} source={{uri: selectedProduct.URI}}/>
   </View>
      <Text style={{fontSize:18, fontWeight:'bold'}}>{selectedProduct.title}</Text>
      <Text style={{fontSize:17}}>Price: {selectedProduct.price}</Text>
      <Text style={{fontSize:17, marginRight:200, fontWeight:'bold'}}>Features:</Text>
      <View style={{marginHorizontal:10,}}>
      <Text style={{fontSize:15, marginRight:120}}>{selectedProduct.description}</Text>
      </View>
    </View>
    <View style={{marginHorizontal:10, flexDirection:'row'}}>
    <View style={styles.bookNow}>
            <Button 
            title='Book Now'
            color={'#13D996'}
            onPress={()=>{props.navigation.navigate('Booking', {
              productId: selectedProduct.id,
            })}}
            />
            </View>
           
    </View>
    <Button title='<-Back' color={'grey'} onPress={()=>{props.navigation.goBack(null)}}/>
    </View>
  );
};

ProductDetails.navigationOptions = navigationData=> {
  return{
      headerTitle:"Product Details",
      headerStyle:{
          backgroundColor:Colors.headerBackground,
          height: 80, // Specify the height of your custom header
        },
        headerTintColor:Colors.headerTint,         
  }
 
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.screenBackground
  },
  productContainer:{
    height:"60%",
    width:'90%',
    backgroundColor:'white',
    alignContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:50
  },
  image:{
    height:'100%', 
    width:"100%", 
    
    
  },
  imageContainer:{
    marginTop:5, 
    padding:10,
    height:'50%', 
    width:"50%",
    borderRadius:20,

  },
 
  bookNow:{
    width:'30%',
    alignContent:'center',
    marginVertical:40,
    marginHorizontal:10,
  
  },
  installment:{
    alignSelf:"flex-start",
    alignContent:'center',
    marginVertical:40,
    marginHorizontal:10,
    
   
  },
});

export default ProductDetails;
