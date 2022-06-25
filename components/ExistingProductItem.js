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
                <Text style={{ margin:5}}>Quantity: {props.ProductBrand}</Text>
                </View>
                <View style={{ marginLeft:50, marginTop:10}}>
                <Ionicons style={{marginHorizontal:10, color:'red'}} name="remove-circle-outline" size={24} color="black" onPress={()=>{
                    
                }}/>
                <Ionicons style={{color:'green', marginHorizontal:10}} name="add-circle-outline" size={24} color="black" onPress={()=>{
                    
                }}/>
                </View>    
                </View>
               


            </View>
      
        
        

    );
}

const styles = StyleSheet.create({
    shopItem:{
        height:70,
        width:300,
        backgroundColor:'#99BCE2',
        margin:15,
        alignItems:'center',
        alignContent:'center',
        borderRadius:10,
    },
    nameText:{
        marginTop:5,
        marginRight:50,
        alignContent:'center',
        fontWeight:'bold',
        fontSize:18,
        color:'black'

    },
});

export default ExistingProductItem;