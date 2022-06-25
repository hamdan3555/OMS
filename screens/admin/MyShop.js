import React  from "react";
import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import MyShopItem from "../../components/MyShopItem";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import CustomHeaderButton from "../../components/HeaderButtons";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';


const MyShop = props=>{
    const dispatch = useDispatch();
    const logOutHandler = ()=>{
        dispatch(authActions.logout());
        props.navigation.goBack();
    }

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
        <View style={{marginTop:130}}>
        <Button color={"green"} title="Booked Items" onPress={()=>{
            props.navigation.navigate('BookedItem')
        }}/>
        </View>  
        <View style={styles.addButton}>
        <View>
        <View  style={{marginVertical:40, marginLeft:60}}>
        <Ionicons onPress={()=>{
             props.navigation.navigate('AddItemScreen')
        }} name="ios-add-circle" size={50} color={Colors.lightBlack} />
        </View>
       
        </View>
        {/* <Image source={} style={{height:50, width:50}} /> */}
        <View style={{marginTop:50, marginLeft:100}}>
        <Button  title="LogOut" onPress={logOutHandler}/>
        
        </View>    
       
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
        marginTop:10,
        height:"20%",
        width:'100%',
        backgroundColor:"#ffff",
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        flexDirection:'row',
    },
    addShop:{
        marginTop:50,
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