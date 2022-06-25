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
import Accessories from '../../components/Accessories';
import * as itemsActions from '../../store/actions/addItem';
import { useSelector, useDispatch } from 'react-redux';

const BrandDetails = props => {
  const productId = props.navigation.getParam('productId');
  let brandName = null;
const getBrandName = ()=>{
  if(productId == 1){
    brandName='Apple'
  }else if (productId == 2) {
    brandName='Samsung'
  } else if (productId == 3) {
    brandName='Oppo'
  } else if (productId == 4) {
    brandName='Vivo'
  } else if (productId == 5) {
    brandName='Infinix'
  } else if (productId == 6) {
    brandName='Nokia'
  } else if (productId == 7) {
    brandName='Motorola'
  } else if (productId == 8) {
    brandName='Lenovo'
  } else if (productId == 9) {
    brandName='Techno'
  } else if (productId == 10) {
    brandName='Huwawei'
  } 
  return brandName;
}
getBrandName();
  const dispatch = useDispatch();
  dispatch(itemsActions.fetchItems());

  const availableProductsCellPhone = useSelector(state => state.items.availableProducts.filter(prod => prod.brandId === productId && prod.categoryId === 1));
  const availableProductsAccessories = useSelector(state => state.items.availableProducts.filter(prod => prod.brandId === productId && prod.categoryId !== 1));

  //console.log(products)

 

  const renderItem =(itemData) =>{
    return(
        <ProductItem 
            title={itemData.item.title}
            URI={itemData.item.URI}
            Price={itemData.item.price}
            onSelect = {()=>{
              props.navigation.navigate('ProductDetails', {
                productId:itemData.item.id
              })
            }}
        />
    ) ;
    
}

const renderItemAccessories =(itemData) =>{
  return(
      <Accessories 
          title={itemData.item.title}
          URI={itemData.item.URI}
          Price={itemData.item.price}
          onSelect = {()=>{
              props.navigation.navigate({
                  routeName:'ProductDetails',
                  params:{productId: itemData.item.id}
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

      <View style={styles.cellPhone}>
      <Text style={{marginLeft:20, fontSize:17, fontWeight:'bold', textDecorationLine: 'underline', margin:10}}>Cell Phones:</Text>
      <FlatList keyExtractor={(item, index)=> item.id}
            data={availableProductsCellPhone}
            renderItem={renderItem}
            numColumns={3}/>
      </View>

       <View >
       <Text style={{marginLeft:20, fontSize:17, fontWeight:'bold', textDecorationLine: 'underline', margin:10}}>Other Accessories:</Text>
        <View style={styles.accessories}>
        <FlatList style={{flex:1, flexDirection:'row', }} 
            keyExtractor={(item, index)=> item.id}
            data={availableProductsAccessories}
            renderItem={renderItemAccessories}
            horizontal={true}
           />
        </View>
      </View>

    </View>
  );
};

BrandDetails.navigationOptions = navigationData=> {
  return{
      headerTitle:"Selected Brand",
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
    fontWeight:'bold'
  },
  cellPhone:{
    height:'60%',
    marginLeft:5, 
    backgroundColor:'white',
    borderRadius:10,
    padding:5
  },
  accessories:{
  
    height:'40%',
    marginLeft:5, 
    backgroundColor:'white',
    borderRadius:10,
    padding:5
  }
});

export default BrandDetails;
