import React , {useEffect} from "react";
import {View,SafeAreaView,FlatList, Text, Image, StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";
import ShopDetailItem from "../../components/ShopDetailItem";
const ShopDetailScreen = props=>{
  
    
    return(
        
        <View style={styles.screen}>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:30}}> Marhaba Mobiles</Text>
        <Text style={{color:'blue'}}>marhabab@email.com</Text>
        <Text>Muslim Town Multan</Text>
        <View style={{marginTop:70, marginHorizontal:20}}>
        <View style={styles.item}>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopDetailPhone')}} givenText="Phones"/>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopDetailAccessories')}} givenText='Accessories'/>
       </View> 
       <View style={styles.item}>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopDetailInstallments')}} givenText='Installment Details'/>
        <ShopDetailItem onSelect={()=>{props.navigation.navigate('ShopInformation')}} givenText='Shop Details'/>
       </View> 
        </View>


        <View style={{marginTop:40, flexDirection:'row'}}> 
        <Text style={{fontSize:16, fontWeight:'bold'}}>Phone:</Text>
        <Text style={{marginLeft:5, color:'blue'}}>+923000000000</Text>
        </View>

      
       </View>
        
       
    )
}

ShopDetailScreen.navigationOptions= navigationData=>{
    return{
        headerTitle:"Shop Details",
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
    item:{
        flexDirection:'row'
    },
    
});

export default ShopDetailScreen;