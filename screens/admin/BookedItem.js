import React  from "react";
import {View,ScrollView, Text,FlatList,Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from 'react-redux';
import BookingOrderItem from "../../components/bookedItem";
import * as productsActions from '../../store/actions/auth';

const BookedItem = props=>{
    const id = useSelector(state => state.auth.userId)
   // const dispatch = useDispatch();
    const products = useSelector(state => state.orders.availableProducts.filter(prod=> prod.userId === id ));
    //console.log(products);
   // console.log(id)


    const renderItem =(itemData) =>{
        const title = itemData.item.title;
        const quantity = itemData.item.quantity;
        const name = itemData.item.name;
        const phone = itemData.item.phone;

        return(
            <BookingOrderItem ProductName={title}
                ProductBrand={quantity}
                Name = {name}
                Contact = {phone}
                />
        ) ;      
    };
    return(
        <View style={styles.screen}>
            <View style={styles.upperCard}>
                <Text style={{fontSize:18, fontWeight:'bold', marginTop:5}}>Booked Items in Shop</Text>
            </View>
            <FlatList keyExtractor={(item, index)=> item.id}
            data={products}
            renderItem={renderItem}
            numColumns={1}/>
        </View>
    )
}



BookedItem.navigationOptions = navigationData=>{
    return{
        headerTitle: 'Booked Items',
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
  
          }, 
          headerTintColor:Colors.headerTint, 
  };   
    };


    const styles=StyleSheet.create({
        screen:{
           
            //alignItems:'center',
            alignContent:'center',
            flex:1,
            backgroundColor:Colors.screenBackground,
        },
      upperCard:{
        backgroundColor:'white', 
        height:40, 
        width:200, 
        alignItems:'center', 
        marginTop:30,
        marginLeft:80,
        alignContent:'center',
        borderRadius:10
      }
    });

export default BookedItem;