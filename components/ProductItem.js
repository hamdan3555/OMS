import React  from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Touchable} from 'react-native';

const ProductItem = props =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelect} >
                <View >    
                <Image style={styles.Image} source={{uri:props.URI}}>
                </Image>
                <View style={{marginTop:10, alignItems:'center'}}>
                <Text >{props.title}</Text>
                <Text>Price:{props.Price}</Text>
                </View>
                </View>
            </TouchableOpacity>
        </View>
              
    )
    
}

const styles=StyleSheet.create({
    container:{
        height:140,
        width: 100,
       // paddingHorizontal:15,
       // paddingVertical:10,
        margin:5,
        borderRadius:15,
        elevation:4,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#CADEEA'

    },
    Image:{
        height:'60%',
        width:'100%',
        borderRadius:10,
        marginTop:5,
    }
    
});

export default ProductItem;