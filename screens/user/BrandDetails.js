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
const BrandDetails = props => {

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

const renderItemAccessories =(itemData) =>{
  return(
      <Accessories 
          title={itemData.item.title}
          URI={itemData.item.URI}
          Price={itemData.item.price}
          onSelect = {()=>{
              props.navigation.navigate({
                  routeName:'Booking',
                  params:{categoryId: itemData.item.id}
              })
          }}
      />
  ) ;
  
}
  return (
    <View style={styles.centered}>
      <View style={styles.selectCategory}>
      <Text style={styles.text}>Brand Name</Text>
      </View>

      <View style={styles.cellPhone}>
      <Text style={{marginLeft:20, fontSize:17, fontWeight:'bold', textDecorationLine: 'underline', margin:10}}>Cell Phones:</Text>
      <FlatList keyExtractor={(item, index)=> item.id}
            data={ITEMS}
            renderItem={renderItem}
            numColumns={3}/>
      </View>

       <View >
       <Text style={{marginLeft:20, fontSize:17, fontWeight:'bold', textDecorationLine: 'underline', margin:10}}>Other Accessories:</Text>
        <View style={styles.accessories}>
        <FlatList style={{flex:1, flexDirection:'row', }} 
            keyExtractor={(item, index)=> item.id}
            data={ITEMS}
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
