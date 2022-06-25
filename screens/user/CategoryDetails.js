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
import { useSelector, useDispatch } from 'react-redux';

const CategoryDetails = props => {

  const productId = props.navigation.getParam('productId');

  let brandName = null;
  const getBrandName = ()=>{
    if(productId == 1){
      brandName='Cell Phones'
    }else if (productId == 2) {
      brandName='Chargers'
    } else if (productId == 3) {
      brandName='Data Cables'
    } else if (productId == 4) {
      brandName='Tablet'
    } else if (productId == 5) {
      brandName='Handfree'
    } else if (productId == 6) {
      brandName='Protector'
    }
    return brandName;
  }
  getBrandName();

  const availableProductsCellPhone = useSelector(state => state.items.availableProducts.filter(prod => prod.categoryId === productId));

  const renderItem =(itemData) =>{
    return(
        <ProductItem 
            title={itemData.item.title}
            URI={itemData.item.URI}
            Price={itemData.item.price}
            onSelect = {()=>{
              props.navigation.navigate('ProductDetails',{
                productId: itemData.item.id
              })
            }}
        />
    ) ;
    
}
  return (
    <View style={styles.centered}>
      <View style={styles.selectCategory}>
      <Text style={styles.text}>{brandName}</Text>
      </View>
    
      <FlatList keyExtractor={(item, index)=> item.id}
            data={availableProductsCellPhone}
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
