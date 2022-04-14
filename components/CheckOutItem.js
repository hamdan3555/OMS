import React from 'react';
import {TouchableNativeFeedback, Text, View, StyleSheet, ImageBackground} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
const CheckOutItem = props =>{
    const ShopName=props.ShopName;
    const ShopAddress=props.ShopAddress;
    return(
        
            <View style={styles.shopItem}>
            
            <Text>ItemName:  {props.Name}</Text>
            <Text>Qauntity:  {props.Quantity}</Text>

            </View>
      
        
        

    );
}

const styles = StyleSheet.create({
    shopItem:{
        height:50,
        width:'80%',
        backgroundColor:'grey',
        marginVertical:15,
        marginHorizontal:30,
        paddingVertical:3,
        paddingHorizontal:10,
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

export default CheckOutItem;