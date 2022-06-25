import React from 'react';
import {TouchableNativeFeedback, Text, View, StyleSheet, ImageBackground} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const BookingOrderItem = props =>{
    const itemName=props.ProductName;
    const quantity=props.ProductBrand;
    const customerName = props.Name;
    const customerContact = props.Contact;
    //console.log(itemName)
    return(
        
            <View style={{...styles.shopItem}}>
                    <Text numberOfLines={1} style={styles.nameText}>{itemName}:</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{ margin:5}}>{customerName}</Text>
            <View>
            </View> 
            <Text style={{ margin:5}}>->{customerContact}</Text>
            <Text style={{ margin:5}}>->quantity:{quantity}</Text> 
 
            </View>
               


            </View>
      
        
        

    );
}

const styles = StyleSheet.create({
    shopItem:{
        height:70,
        width:'80%',
        backgroundColor:'#99BCE2',
        margin:15,
        marginLeft:30,
        alignItems:'center',
        alignContent:'center',
        borderRadius:10,
    },
    nameText:{
        marginTop:5,
        marginRight:100,
        fontWeight:'bold',
        fontSize:18,
        color:'black'

    },
});

export default BookingOrderItem;