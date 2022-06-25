import React  from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Touchable} from 'react-native';

const Accessories = props =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelect} >
                <View >    
                <Image style={styles.Image} source={{uri:props.URI}}>
                </Image>
                <View style={{marginTop:5, alignItems:'center'}}>
                <Text numberOfLines={1} >{props.title}</Text>
                <Text numberOfLines={1}>Price:{props.Price}</Text>
                </View>
                </View>
            </TouchableOpacity>
        </View>
              
    )
    
}

const styles=StyleSheet.create({
    container:{
        height:100,
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
        height:50,
        width:50,
        alignItems:'center',
        alignContent:'center',
        borderRadius:10,
        marginHorizontal:5,
        marginTop:5,
    }
    
});

export default Accessories;