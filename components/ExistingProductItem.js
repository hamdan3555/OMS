import React from 'react';
import {TouchableNativeFeedback, Text, View, StyleSheet, ImageBackground} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
const ExistingProductItem = props =>{
    const ShopName=props.ShopName;
    const ShopAddress=props.ShopAddress;
    return(
        
            <View style={{...styles.shopItem}}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text numberOfLines={1} style={styles.nameText}>{props.ProductName}</Text>
                    <Text style={{ margin:5}}>Brand: {props.ProductBrand}</Text>
                </View>
                <View style={{flexDirection:'row',  marginTop:20}}>
                <Ionicons style={{marginHorizontal:20, color:'red'}} name="remove-circle-outline" size={24} color="black" />
                <Ionicons style={{color:'green'}} name="add-circle-outline" size={24} color="black" />
            </View>    
                </View>
               


            </View>
      
        
        

    );
}

const styles = StyleSheet.create({
    shopItem:{
        height:70,
        width:'90%',
        backgroundColor:'#99BCE2',
        margin:15,
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

export default ExistingProductItem;