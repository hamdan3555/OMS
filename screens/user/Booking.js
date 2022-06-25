import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  ScrollView,
  Platform,
  Button,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Alert
} from 'react-native';
import CustomHeaderButton from '../../components/HeaderButtons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import Colors from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from '../../store/actions/order';
import * as shopActions from '../../store/actions/addShop';
const Booking = props => {
  const [isName, setIsName] = useState('');
  const [isAddress, setIsAddress] = useState('');
  const [isContact, setIsContact] = useState('');
  const [isQuantity, setIsQuantity] = useState(null);
  let totalPrice = null;
  const error = "Caught Some Error"
  const dispatch = useDispatch();
 // const userId  = props.navigation.getParam('userId');
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.items.availableProducts.find(prod => prod.id === productId)
  );
//console.log(selectedProduct.userId)
// getting required shop
//const Shop = useSelector(state => state.shops.availableProducts);
 //dispatch(shopActions.fetchShops())
const selectedShop =  useSelector(state =>
  state.shops.availableProducts.find(prod => prod.userId ===  selectedProduct.userId)
);
 // console.log(selectedShop);
  const uploadOrder = ()=>{
    totalPrice = selectedProduct.price*isQuantity;
    dispatch(productsActions.createOrder(selectedProduct.title, totalPrice, selectedProduct.userId, isAddress, isContact, isQuantity, isName));
  }
  const exceptionHandler = ()=>{
    if(isName.length < 6 ){
      return  false;
    }else if (isAddress.length < 6) {
      return false;
    } else if (isQuantity <= 0) {
      return false;
    }else if (isContact.length < 11) {
      return false;
    }else{
      return true;
    }
  }
  return (
    <View>
          <View style={styles.detailsCard}>
          <Image ></Image>
          <Text style={{fontWeight:'bold', fontSize:24}}>{selectedShop.title}</Text>
          <Text>{selectedShop.phone}</Text>
          <Text style={{marginTop:10}}>{selectedProduct.title}</Text>
          <Text>Price: {selectedProduct.price}</Text>
         
          <HeaderButtons  HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-close-circle-outline' style={{marginTop:40}}  onPress={()=>{
                props.navigation.navigate('HomeScreen')}}/>
          </HeaderButtons>
         
          
          </View>
          
          <ScrollView style={{marginTop:30}}>

          <TextInput 
           style={styles.placeholder}
           placeholder="Name"
           keyboardType='default'
           onChangeText={setIsName}
           value={isName}
           />
           <TextInput 
           style={styles.placeholder}
           placeholder="Address"
           keyboardType='default'
           onChangeText={setIsAddress}
           value={isAddress}
           />  
          <TextInput 
           style={styles.placeholder}
           placeholder="Phone"
           keyboardType='number-pad'
           onChangeText={setIsContact}
           value={isContact}
           />
          <TextInput 
           style={styles.placeholder}
           placeholder="Quantity"
           keyboardType='number-pad'
           onChangeText={setIsQuantity}
           value={isQuantity}
           />
          </ScrollView>
          <View style={{marginTop:20}}>
            <View style={styles.bookNow}>
            <Button title='Book Now' color={'#13D996'} onPress={()=>{
              let check = exceptionHandler();
              if(check == true){
                uploadOrder();
                props.navigation.navigate('Congratulations')
              }else{
                Alert.alert('Fill all the requirements correctly', error, [{ text: 'Okay' }]);
              }
              
              }}/>
            </View>
            
            
          </View>
    </View>
 
  );
};


Booking.navigationOptions = navigationData=> {
  return{
      headerTitle:"Booking",
      headerStyle:{
          backgroundColor:Colors.headerBackground,
          height: 80, // Specify the height of your custom header

        }, 
        headerTintColor:Colors.headerTint, 
};
}


const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignContent:'center',
    alignItems:'center'
  },
  detailsCard: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#13D996',
    borderBottomColor:'black',
    borderBottomWidth:3,
    borderBottomLeftRadius:70,
    borderBottomRightRadius:70,
    
  },
  placeholder: {
    height: 40,
    width:"90%",
    marginLeft:18,
    marginTop:10,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#DFE3BB',
    
  },
  bookNow:{
    width:'50%',
    alignContent:'center',
    marginVertical:10,
    marginHorizontal:'25%',
  },
  installment:{
    width:'50%',
    marginVertical:10,
    alignContent:'center',
    marginHorizontal:'25%',
  },
});


export default Booking;
