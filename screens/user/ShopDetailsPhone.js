import React , {useEffect} from "react";
import {View,SafeAreaView,FlatList, Text, Image, StyleSheet} from 'react-native';
import ShopGrid from "../../components/ShopGrid";
import Colors from "../../constants/Colors";
import { ITEMS } from "../../Data/dummydata";
import ProductItem from "../../components/ProductItem";
const ShopDetailsPhone = props=>{
  
    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetails', {
          productId: id,
          productTitle: title
        });
      };

    const renderItem =(itemData) =>{
        return(
            <ProductItem 
                onSelect = {selectItemHandler}
                title={itemData.item.title}
                URI={itemData.item.URI}
                Price={itemData.item.price}
               

            />
        ) ;
        
    }

    return(
        
        <View style={styles.screen}>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:30}}> Marhaba Mobiles</Text>
        <Text style={{color:'blue'}}>marhabab@email.com</Text>
        <Text>Muslim Town Multan</Text>

        <View style={{marginTop:10, flexDirection:'row'}}> 
        <Text style={{fontSize:16, fontWeight:'bold'}}>Phone:</Text>
        <Text style={{marginLeft:5, color:'blue'}}>+923000000000</Text>
        </View>    
        <View style={styles.cellPhone}>
            <Text style={{marginLeft:20, fontSize:17, fontWeight:'bold', textDecorationLine: 'underline', margin:10}}>Cell Phones:</Text>
            <FlatList keyExtractor={(item, index)=> item.id}
            data={ITEMS}
            renderItem={renderItem}
            numColumns={3}/>
        </View>
        </View>
        
       
    )
}

ShopDetailsPhone.navigationOptions= navigationData=>{
    return{
        headerTitle:"Cell Phones",
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
    cellPhone:{
        height:'75%',
        marginLeft:5, 
      //  backgroundColor:'white',
        borderRadius:10,
        padding:5
      },
});

export default ShopDetailsPhone;