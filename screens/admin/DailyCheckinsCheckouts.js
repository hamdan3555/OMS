import React  from "react";
import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import CheckOutItem from "../../components/CheckOutItem";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const DailyCheckinsCheckouts = props=>{
    return(
        <View style={styles.screen}>
                
                <Text style={{marginTop:20, fontSize:16, fontWeight:'bold'}}>Todays Checkouts</Text>
                 <View style={{marginTop:5, backgroundColor:'white', height:"90%", width:'90%', borderRadius:10}}>
                  <ScrollView>
                    <CheckOutItem Name='Samsung Note 9'
                    Quantity='5'
                    />
                     <CheckOutItem Name='Oppo Y16'
                    Quantity='7'
                    />
                     <CheckOutItem Name='Iphone 11'
                    Quantity='2'
                    />
                    <CheckOutItem Name='Samsung Note 10'
                    Quantity='10'
                    />
                  </ScrollView>
               </View>
                
        </View>
    )
};

const styles=StyleSheet.create({
    screen:{
        alignItems:'center',
        alignContent:'center',
        flex:1,
        backgroundColor:Colors.screenBackground,
    },
  
});

DailyCheckinsCheckouts.navigationOptions = navigationData=>{
    return{
        headerTitle: 'Daily Report',
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
  
          }, 
          headerTintColor:Colors.headerTint, 
  };   
    };


export default DailyCheckinsCheckouts;