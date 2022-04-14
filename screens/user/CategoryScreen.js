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

const CategoryScreen = props => {


  return (
    <View style={styles.screen}>
      <View style={styles.item}>
         <CategoryItem onSelect={()=>{props.navigation.navigate('CategoryDetails')}} givenText="Cell Phones" URI='https://www.pngkey.com/png/detail/258-2581871_data-group-phones-cellular-phone.png'/>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails')}} givenText='Chargers' URI='https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-mobile-phone-charger-charger-charging-head-vector-png-image_2620297.jpg'/>
        </View>
        <View style={styles.item}>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails')}} givenText="Data Cables" URI='https://www.pngall.com/wp-content/uploads/8/Data-Cable-PNG-Image.png'/>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails')}} givenText='Tablets' URI='https://www.pngfind.com/pngs/m/52-523103_tablets-png-transparent-png.png'/>
        </View> 
        <View style={styles.item}>
        <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails')}} givenText='HandFrees' URI='https://toppng.com/uploads/preview/mobile-hands-free-11562936991wmkiwljxbj.png'/>
         <CategoryItem  onSelect={()=>{props.navigation.navigate('CategoryDetails')}} givenText="Protectors" URI='https://w7.pngwing.com/pngs/434/178/png-transparent-smartphone-iphone-x-screen-protectors-toughened-glass-full-glass-glass-electronics-gadget-thumbnail.png'/>
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
