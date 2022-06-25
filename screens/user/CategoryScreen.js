import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import Colors from '../../constants/Colors';
import { getFirestore, collection, getDocs, doc, addDoc, deleteDoc } from "@firebase/firestore";

//initialize services
const db = getFirestore();
// Collection reference 
const collectionReference = collection(db, 'Category');

const GetData = ()=>{
  let itemsData = [];

  // Getting Collection Data
          getDocs(collectionReference).then((snapshot)=>{
          snapshot.docs.forEach((doc)=>{
           // console.log(doc)
             itemsData.push({...doc.data(), id: doc.id})
          });
        }).catch(err =>{
          console.log(err.message)
      })
     // console.log(itemsData)
}

const CategoryScreen = props => {

  return (
    <View style={styles.screen}>
      <View style={styles.item}>
         <CategoryItem onSelect={()=>{props.navigation.navigate('CategoryDetails',{
           productId:1
         })}} givenText="Cell Phones" URI='https://www.pngkey.com/png/detail/258-2581871_data-group-phones-cellular-phone.png'/>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails', {
           productId:2
         })}} givenText='Chargers' URI='https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-mobile-phone-charger-charger-charging-head-vector-png-image_2620297.jpg'/>
        </View>
        <View style={styles.item}>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails',{
           productId:3
         })}} givenText="Data Cables" URI='https://www.pngall.com/wp-content/uploads/8/Data-Cable-PNG-Image.png'/>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails',{
           productId:4
         })}} givenText='Tablets' URI='https://www.pngfind.com/pngs/m/52-523103_tablets-png-transparent-png.png'/>
        </View> 
        <View style={styles.item}>
        <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails',{
          productId:5
        })}} givenText='HandFrees' URI='https://toppng.com/uploads/preview/mobile-hands-free-11562936991wmkiwljxbj.png'/>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails',{
           productId:6
         })}} givenText="Protectors" URI='https://w7.pngwing.com/pngs/434/178/png-transparent-smartphone-iphone-x-screen-protectors-toughened-glass-full-glass-glass-electronics-gadget-thumbnail.png'/>
        </View>  
    </View>
  );
};

CategoryScreen.navigationOptions= navigationData=>{
  return{
      headerTitle:"All Categories",
      headerStyle:{
          backgroundColor:Colors.headerBackground,
          height: 80, // Specify the height of your custom header
        },
        
        headerTintColor:Colors.headerTint,
       
  }
}

const styles = StyleSheet.create({
  screen:{
    alignItems:'center',
    alignContent:'center',
    flex:1,
    backgroundColor:'#DADBD6'
},
item:{
    flexDirection:'row'
}
});

export default CategoryScreen;
