import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import BrandItem from '../../components/BrandItem';
import CustomHeaderButton from "../../components/HeaderButtons";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import Colors from '../../constants/Colors';
const Brands = props => {


  return (
    <ScrollView style={styles.screen}>
    <View style={styles.item}>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText="Samsung" URI='https://w7.pngwing.com/pngs/121/591/png-transparent-samsung-logo-electric-blue-text-brand-apps-samsung-blue-text-logo.png' />
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText='Apple' URI='https://pngimg.com/uploads/apple_logo/apple_logo_PNG19673.png'/>
        </View> 
        <View style={styles.item}>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText="Huwawei" URI='https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'/>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText='Oppo' URI='https://www.techniknews.net/wp-content/uploads/2020/04/oppo-logo.png'/>
        </View>
        <View style={styles.item}>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText="Vivo" URI='https://i.pinimg.com/736x/bd/74/67/bd7467862993dbfbef403f681599a2d6.jpg'/>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText='Nokia' URI='https://cdn.wallpapersafari.com/61/77/rmb5aB.jpg'/>
        </View>
        <View style={styles.item}>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText="Motorola" URI='https://logosvector.net/wp-content/uploads/2013/03/motorola-eps-vector-logo.png'/>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText='Lenovo' URI='https://flyclipart.com/thumb2/logo-lenovo-stunning-emc-lenovo-logo-with-logo-lenovo-affordable-922786.png'/>
        </View>
        <View style={styles.item}>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText="Infinx" URI='https://www.gizchina.com/wp-content/uploads/images/2021/11/Infinix-5G-2.jpg'/>
         <BrandItem onSelect={()=>{props.navigation.navigate('BrandDetails')}} givenText='Techno' URI='https://seeklogo.com/images/T/tecno-logo-EAB0552912-seeklogo.com.gif'/>
        </View>    
    </ScrollView>
  );
};

Brands.navigationOptions = navigationData=> {
  return{
      headerTitle:"Brands",
      headerStyle:{
          backgroundColor:Colors.headerBackground,
          height: 80, // Specify the height of your custom header

        }, 
        headerTintColor:Colors.headerTint,
          
};
}

const styles = StyleSheet.create({
  screen:{
   
    alignContent:'center',
    flex:1,
    backgroundColor:'#DADBD6'
},
item:{
  flexDirection:'row',
  marginLeft:20,
},
});

export default Brands;
