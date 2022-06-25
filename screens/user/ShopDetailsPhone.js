import React , {useEffect} from "react";
import {View,SafeAreaView,FlatList, Text, Image, StyleSheet} from 'react-native';
import ShopGrid from "../../components/ShopGrid";
import Colors from "../../constants/Colors";
import { ITEMS } from "../../Data/dummydata";
import ProductItem from "../../components/ProductItem";
import { useSelector, useDispatch } from 'react-redux';

const ShopDetailsPhone = props=>{
    const productId = props.navigation.getParam('id');
    const selectedProduct = useSelector(state =>
        state.shops.availableProducts.find(prod => prod.userId === productId)
        );
        console.log(selectedProduct)
    const productsCellPhones = useSelector(state => state.items.availableProducts.filter(prod => prod.categoryId === 1 && prod.userId === productId));

    

    const renderItem =(itemData) =>{
        return(
            <ProductItem 
                onSelect = {()=>{
                    props.navigation.navigate('ProductDetails',{
                        productId: itemData.item.id
                    })
                }}
                title={itemData.item.title}
                URI={itemData.item.URI}
                Price={itemData.item.price}
               

            />
        ) ;
        
    }

    return(
        
        <View style={styles.screen}>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:30}}>{selectedProduct.title}</Text>
        <Text style={{color:'blue'}}>{selectedProduct.email}</Text>
        <Text>{selectedProduct.address}</Text>

        <View style={{marginTop:10, flexDirection:'row'}}> 
        <Text style={{fontSize:16, fontWeight:'bold'}}>Phone:</Text>
        <Text style={{marginLeft:5, color:'blue'}}>{selectedProduct.phone}</Text>
        </View>    
        <View style={styles.cellPhone}>
            <Text style={{marginLeft:20, fontSize:17, fontWeight:'bold', textDecorationLine: 'underline', margin:10}}>Cell Phones:</Text>
            <FlatList keyExtractor={(item, index)=> item.id}
            data={productsCellPhones}
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