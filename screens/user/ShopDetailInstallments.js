import React , {useEffect} from "react";
import {View,SafeAreaView,Button, Text, Image, StyleSheet} from 'react-native';
import ShopGrid from "../../components/ShopGrid";
import Colors from "../../constants/Colors";
import { ITEMS } from "../../Data/dummydata";

const ShopDetailInstallments = props=>{
  

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

    return(
        
        <View style={styles.screen}>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:30}}> Marhaba Mobiles</Text>
        <Text style={{color:'blue'}}>marhabab@email.com</Text>
        <Text>Muslim Town Multan</Text>

        <View style={{marginTop:10, flexDirection:'row'}}> 
        <Text style={{fontSize:16, fontWeight:'bold'}}>Phone:</Text>
        <Text style={{marginLeft:5, color:'blue'}}>+923000000000</Text>
        </View>    
       <View style={styles.listDetails}>
           <Text style={{fontSize:18, fontWeight:'bold', marginVertical:30}}>Installments Details</Text>
          
           <View style={{flexDirection:'row', marginTop:5}}>
               <Text style={styles.LeftFont}>Adavnce: </Text>
               <Text> 25%</Text>
           </View>
           <View style={{flexDirection:'row', marginTop:5}}>
               <Text style={styles.LeftFont}>Per Installment: </Text>
               <Text> 5%</Text>
           </View>
           <View style={{flexDirection:'row', marginTop:5}}>
               <Text style={styles.LeftFont}>Total Installment: </Text>
               <Text> 15</Text>
           </View>
           <View style={{flexDirection:'row', marginTop:5}}>
               <Text style={styles.LeftFont}>Actual Price: </Text>
               <Text> 25k</Text>
           </View>
           <View style={{flexDirection:'row', marginTop:5}}>
               <Text style={styles.LeftFont}>Installemented Price: </Text>
               <Text> 27.5k</Text>
           </View>
           <View style={{flexDirection:'row', marginHorizontal:10, marginVertical:20}}>
               <SafeAreaView>
               <Text style={styles.LeftFont}>Note: </Text>
               <Text> Intsallmented price will be more than 10% of actual price. As in above detailed it is shown</Text>
               </SafeAreaView>
           </View>
           <View style={{marginTop:40}}>
           <Button title='<-Back' color={'grey'} onPress={()=>{props.navigation.goBack(null)}}/>
           </View>
       </View>
        </View>
        
       
    )
}

ShopDetailInstallments.navigationOptions= navigationData=>{
    return{
        headerTitle:"Installment System",
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
   listDetails:{
       flex:1,
       width:'100%',
       marginTop:10,
       borderRadius:20,
       backgroundColor:'white',
       alignContent:'center',
       alignItems:'center'
   },
   LeftFont:{
       fontWeight:'bold',

   }
});

export default ShopDetailInstallments;