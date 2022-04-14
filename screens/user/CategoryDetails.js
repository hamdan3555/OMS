import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';
import { ITEMS, shopsDetails} from "../../Data/dummydata";
import ProductItem from '../../components/ProductItem';
const CategoryDetails = props => {

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetails', {
      productId: id,
      productTitle: title
    });
  };
  const renderItem =(itemData) =>{
    return(
        <ProductItem 
            title={itemData.item.title}
            URI={itemData.item.URI}
            Price={itemData.item.price}
            onSelect = {selectItemHandler}
        />
    ) ;
    
}
  return (
    <View style={styles.centered}>
      <View style={styles.selectCategory}>
      <Text style={styles.text}>Category Name</Text>
      </View>
    
      <FlatList keyExtractor={(item, index)=> item.id}
            data={ITEMS}
            renderItem={renderItem}
            numColumns={3}/>      
    </View>
  );
};

CategoryDetails.navigationOptions = navigationData=> {
  return{
      headerTitle:"Selected Category",
      headerStyle:{
          backgroundColor:Colors.headerBackground,
          height: 80, // Specify the height of your custom header
        },
        headerTintColor:Colors.headerTint,
            
  }
 
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems:'center',
    backgroundColor:Colors.screenBackground,
  },
  selectCategory:{
    marginVertical:20,
    marginHorizontal:55,
    height:40,
    width:'70%',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#3DCEC1',
    borderRadius:10,
  },
  text:{
    fontSize:18,
    padding:5,
  }
});

export default CategoryDetails;
