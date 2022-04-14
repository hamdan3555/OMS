import React  from "react";
import {View, Text, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';

const ShopDetailItem = props =>{
    return(
        <TouchableNativeFeedback onPress={props.onSelect}>
        <View style={styles.container}>    
        <Text style={styles.text}>{props.givenText}</Text>
        </View>
        </TouchableNativeFeedback>
        
    )
    
}

const styles=StyleSheet.create({
    container:{
        height: 140,
        width: '45%',
       // paddingHorizontal:15,
       // paddingVertical:10,
        marginTop:50,
        marginHorizontal:10,
        borderRadius:20,
        //elevation:4,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'white'

    },
    text:{
        marginVertical:40,
        padding:10,
        fontSize:18,
        fontWeight:'bold',
        color:"black"
    }
    
});

export default ShopDetailItem;