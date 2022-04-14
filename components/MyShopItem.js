import React  from "react";
import {View, Text, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';

const MyShopItem = props =>{
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
        width: '40%',
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
        marginVertical:30,
        padding:10,
        fontSize:20,
        fontWeight:'bold',
        color:"black"
    }
    
});

export default MyShopItem;