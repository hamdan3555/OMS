import React , {useEffect} from "react";
import {View,SafeAreaView,FlatList, Text, Image, StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";
import ShopDetailItem from "../../components/ShopDetailItem";
import * as productsActions from '../../store/actions/addShop';
import { useSelector, useDispatch } from 'react-redux';
const ShopDetailScreen = props=>{

    const dispatch = useDispatch();
   // dispatch(productsActions.fetchShops());
    const productId = props.navigation.getParam('productId');   
    const selectedProduct = useSelector(state =>
    state.shops.availableProducts.find(prod => prod.id === productId)
    );
    const param = selectedProduct.userId;
  //  console.log(selectedProduct.userId)
    return(
        
        <View style={styles.screen}>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:30}}>{selectedProduct.title}</Text>
        <Text style={{color:'blue'}}>{selectedProduct.email}</Text>
        <Text>{selectedProduct.address}</Text>
        <View style={{marginTop:70, marginHorizontal:20}}>
        <View style={styles.item}>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopDetailPhone',{
            id: param,
        })}} givenText="Phones"/>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopDetailAccessories',{
            id: param,
        })}} givenText='Accessories'/>
       </View> 
       <View style={styles.item}>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopDetailInstallments',{
            id:param
        })}} givenText='Installment Details'/>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopInformation', {
            id:param
        })}} givenText='Shop Details'/>
       </View> 
        </View>


        <View style={{marginTop:40, flexDirection:'row'}}> 
        <Text style={{fontSize:16, fontWeight:'bold'}}>Phone:</Text>
        <Text style={{marginLeft:5, color:'blue'}}>{selectedProduct.phone}</Text>
        </View>

      
       </View>
        
       
    )
}

ShopDetailScreen.navigationOptions= navigationData=>{
    return{
        headerTitle:"Shop Details",
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
          },
          
          headerTintColor:Colors.headerTint,
         
    }
}
const styles=StyleSheet.create({
    screen:{
        alignItems:'center',
        alignContent:'center',
        flex:1,
        backgroundColor:'#DADBD6'
    },
    item:{
        flexDirection:'row'
    },
    
});

export default ShopDetailScreen;