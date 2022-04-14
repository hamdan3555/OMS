import React  from "react";
import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import MyShopItem from "../../components/MyShopItem";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const MyShop = props=>{
    return(
        <View style={styles.screen}>
         <View style={styles.item}>
         <MyShopItem onSelect={()=>{props.navigation.navigate('DailyCheckinsCheckouts')}} givenText="Today's Checkouts"/>
         <MyShopItem onSelect={()=>{props.navigation.navigate('MonthlyReports')}} givenText='Monthly Report'/>
        </View> 
        <View style={styles.item}>
         <MyShopItem onSelect={()=>{props.navigation.navigate('ShopDetailInstallments')}} givenText='Installment Details'/>
         <MyShopItem onSelect={()=>{props.navigation.navigate('ExistingProducts')}} givenText='Existing Products'/>
        </View>  

        <View style={styles.addButton}>
        <View  style={{marginVertical:25, marginLeft:95}}>
        <Ionicons onPress={()=>{
             props.navigation.navigate('AddItemScreen')
        }} name="ios-add-circle" size={60} color={Colors.lightBlack} />
        </View>
        <Text style={styles.addShop}> Add Item </Text>    

        </View>
        </View>
    )
};

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
    addButton:{
        marginTop:130,
        height:"20%",
        width:'100%',
        backgroundColor:'#99BCE2',
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        flexDirection:'row',
    },
    addShop:{
        marginTop:45,
        fontSize:20,
        marginRight:25,
        fontWeight:'bold'
    }
});

MyShop.navigationOptions = navigationData=>{
    return{
        headerTitle: 'My Shop',
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
  
          }, 
          headerTintColor:Colors.headerTint, 
  };   
    };


export default MyShop;