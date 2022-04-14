import React from 'react';
import {TouchableNativeFeedback, Text, View, StyleSheet, ImageBackground} from 'react-native';

const ShopGrid = props =>{
    const ShopName=props.ShopName;
    const ShopAddress=props.ShopAddress;
    return(
        <TouchableNativeFeedback  onPress={props.onSelect} >
            <View style={{...styles.shopItem}}>
            <Text numberOfLines={1} style={styles.nameText}>{ShopName}</Text>
            <Text style={{alignItems:'center', margin:10}}>{ShopAddress}</Text>

            </View>
        </TouchableNativeFeedback>
        
        

    );
}

const styles = StyleSheet.create({
    shopItem:{
        height:120,
        width:'90%',
        backgroundColor:'#99BCE2',
        margin:15,
        alignItems:'center',
        alignContent:'center',
        borderRadius:10,
    },
    nameText:{
        margin:15,
        fontWeight:'bold',
        fontSize:25,
        color:'white'

    },
});

export default ShopGrid;