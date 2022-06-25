import React  from "react";
import {View,ScrollView, Text,FlatList,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import ExistingProductItem from "../../components/ExistingProductItem";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from 'react-redux';

const ExistingProducts = props=>{
    const id = useSelector(state => state.auth.userId)
    const products = useSelector(state => state.items.availableProducts.filter(prod=> prod.userId === id ));
   // console.log(products);
    //console.log(id);
    const renderItem =(itemData) =>{
        return(
            <ExistingProductItem 
                ProductName={itemData.item.title}
                ProductBrand={itemData.item.quantity}
            />
        ) ;      
    };
    return(
        <View style={styles.screen}>
                <View style={styles.upperCard}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginTop:5}}>Products in your Shop</Text>
                </View>
                <FlatList keyExtractor={(item, index)=> item.id}
            data={products}
            renderItem={renderItem}
            numColumns={1}/>
                
        </View>
    )
}



ExistingProducts.navigationOptions = navigationData=>{
    return{
        headerTitle: 'My Products',
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
  
          }, 
          headerTintColor:Colors.headerTint, 
  };   
    };


    const styles=StyleSheet.create({
        screen:{
            alignItems:'center',
            alignContent:'center',
            flex:1,
            backgroundColor:Colors.screenBackground,
        },
      upperCard:{
        backgroundColor:'white', 
        height:40, 
        width:'80%', 
        alignItems:'center', 
        marginTop:30,
        alignContent:'center',
        borderRadius:10
      }
    });

export default ExistingProducts;