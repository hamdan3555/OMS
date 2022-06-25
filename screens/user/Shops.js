import React , {useEffect} from "react";
import {View,SafeAreaView,FlatList, Text, Image, StyleSheet, LogBox} from 'react-native';
import ShopGrid from "../../components/ShopGrid";
import Colors from "../../constants/Colors";
import { shopsDetails } from "../../Data/dummydata";
import * as productsActions from '../../store/actions/addShop';
import { useSelector, useDispatch } from 'react-redux';
const Shops = props=>{

    const dispatch = useDispatch();
    dispatch(productsActions.fetchShops());
   useEffect(()=>{
    LogBox.ignoreLogs(['Setting a timer for a long period of time'])
   });
    
    const products = useSelector(state => state.shops.availableProducts);
   // console.log(products)

    const renderGridItem =(itemData) =>{
        return(
            <ShopGrid 
                ShopName={itemData.item.title}
                ShopAddress={itemData.item.address}
                onSelect = {()=>{props.navigation.navigate('ShopDetails', {
                    productId: itemData.item.id,
                })}}
            />
        ) ;
        
    }

   
    
    return(
        
        <View style={styles.screen}>
             <FlatList  
             style={{marginLeft:10}}
             data={products}
            renderItem={renderGridItem}
        />
       
        </View>
        
       
    )
}

Shops.navigationOptions= navigationData=>{
    return{
        headerTitle:"Shops",
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
   
});

export default Shops;