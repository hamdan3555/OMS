import React  from "react";
import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import CheckOutItem from "../../components/CheckOutItem";
const MonthlyReports = props=>{
    return(
        <View style={styles.screen}>

                 <Text style={{marginTop:20, fontSize:16, fontWeight:'bold'}}>Check-outs this month</Text>
                 <View style={{marginTop:5, backgroundColor:'white', height:"40%", width:'90%', borderRadius:10}}>
                  <ScrollView>
                    <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
                    />
                     <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
                    />
                     <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
                    />
                    <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
                    />
                  </ScrollView>
               </View>
               <Text style={{marginTop:20, fontSize:16, fontWeight:'bold'}}>Check-ins this month</Text>
                 <View style={{marginTop:5, backgroundColor:'white', height:"40%", width:'90%', borderRadius:10}}>
                  <ScrollView>
                    <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
                    />
                     <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
                    />
                     <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
                    />
                    <CheckOutItem Name='Samsung Note 9'
                    Quantity='2'
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

MonthlyReports.navigationOptions = navigationData=>{
    return{
        headerTitle: 'Monthly Report',
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
  
          }, 
          headerTintColor:Colors.headerTint, 
  };   
    };


export default MonthlyReports;