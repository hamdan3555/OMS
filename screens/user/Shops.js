import React , {useEffect} from "react";
import {View,SafeAreaView,FlatList, Text, Image, StyleSheet} from 'react-native';
import ShopGrid from "../../components/ShopGrid";
import Colors from "../../constants/Colors";
import { shopsDetails } from "../../Data/dummydata";

const Shops = props=>{
  

    const renderGridItem =(itemData) =>{
        return(
            <ShopGrid 
                ShopName={itemData.item.title}
                ShopAddress={itemData.item.address}
                onSelect = {()=>{props.navigation.navigate('ShopDetails')}}
            />
        ) ;
        
    }

   
    
    return(
        
        <View style={styles.screen}>
             <FlatList  
             style={{marginLeft:10}}
             data={shopsDetails}
            renderItem={renderGridItem}
        />
       
        </View>
        
       
    )
}

Shops.navigationOptions= navigationData=>{
    return{
        headerTitle:"Shops",
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
   
});

export default Shops;