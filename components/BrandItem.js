import React  from "react";
import {View, Text, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';

const BrandItem = props =>{
    return(
        <TouchableNativeFeedback onPress={props.onSelect}>
            <View style={styles.container}> 
            <Image style={styles.Image} source={{uri:props.URI}}>
            </Image>  
            <Text style={styles.text}>{props.givenText}</Text>
            </View>
        </TouchableNativeFeedback>
       
    )
    
}

const styles=StyleSheet.create({
    container:{
        height: 150,
        width: '40%',
       // paddingHorizontal:15,
       // paddingVertical:10,
        marginTop:30,
        marginHorizontal:10,
        borderRadius:20,
        //elevation:4,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'white'

    },
    text:{
        margin:10,
        padding:10,
        fontSize:20,
        fontWeight:'bold',
        color:"black"
    },
    Image:{
        height:80,
        width:80,
        borderRadius:10,
        marginTop:10,
       // borderTopEndRadius:10,
       // borderTopStartRadius:10,
       // borderBottomEndRadius:10,
       // borderBottomStartRadius:10,
    }
    
});

export default BrandItem;