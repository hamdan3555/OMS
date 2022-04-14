import React , {useEffect} from "react";
import {View,SafeAreaView,FlatList, Text, Image, StyleSheet} from 'react-native';
import ShopGrid from "../../components/ShopGrid";
import Colors from "../../constants/Colors";
import { ITEMS } from "../../Data/dummydata";

const ShopInformation = props=>{
  



    return(
        
        <View style={styles.screen}>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:30}}> Marhaba Mobiles</Text>
        <Text style={{color:'blue'}}>marhabab@email.com</Text>
        <Text>Muslim Town Multan</Text>

        <View style={{marginTop:10, flexDirection:'row'}}> 
        <Text style={{fontSize:16, fontWeight:'bold'}}>Phone:</Text>
        <Text style={{marginLeft:5, color:'blue'}}>+923000000000</Text>
        </View>  
         
        <View style={{marginTop:40, }}> 
        <Text style={{fontSize:16, fontWeight:'bold', marginLeft:15}}>About Us:</Text>
        <View style={{marginHorizontal:15, }}>
        <Text >Today, we offer collections that are wide-ranging and varied for all ages. Our brand offers an eclectic mix of smart devices, accessories and all merchandise that are with the latest technologies and trends. We curate collections with a unique vision of what’s best for everyone without compromising on our vision to always offer inspiring brands with unbeatable value for money.</Text>
        </View>
        </View> 
        <Image style={styles.image} source={{uri:'https://c0.wallpaperflare.com/preview/535/583/651/smartphone-shopping-shopping-cart-online-shop.jpg'}}/>

        </View>
        
       
    )
}

ShopInformation.navigationOptions= navigationData=>{
    return{
        headerTitle:"About Shop",
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
          },
          
          headerTintColor:Colors.headerTint,
         
    }
}
const styles=StyleSheet.create({
    screen:{
        alignItems:'center',
        alignContent:'center',
        flex:1,
        backgroundColor:'#DADBD6'
    },
    image:{
        marginTop:40,
        borderRadius:20,
        height:250, 
        width:"100%",   
      },
});

export default ShopInformation;