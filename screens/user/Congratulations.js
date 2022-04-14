import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  ScrollView,
  Platform,
  Button,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import CustomHeaderButton from '../../components/HeaderButtons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import Colors from '../../constants/Colors';

const Congratulations = props => {


  return (
    <View style={styles.screen}>
    <Image style={styles.image} source={{uri:'https://media.istockphoto.com/vectors/congratulations-card-with-light-rays-vector-id960999328?k=20&m=960999328&s=170667a&w=0&h=q_oDICGCRNAhScQenTHM0nFCd7oo-zeVdnOk3MbP1NM='}}/>
    <Text style={{marginHorizontal:20, marginTop:40}}>Congrats! your booking is confirm you can visit shop for further details and can grab your products</Text>
    <View style={{marginTop:40}}>
    <Button  title='<-Back' color={'grey'} onPress={()=>{props.navigation.navigate('HomeScreen')}}/>
    </View>
    </View>
 
  );
};


Congratulations.navigationOptions = navigationData=> {
  return{
      headerTitle:"Order Done",
      headerStyle:{
          backgroundColor:Colors.headerBackground,
          height: 80, // Specify the height of your custom header

        }, 
        headerTintColor:Colors.headerTint, 
};
}


const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  image:{
    marginTop:'25%',
    borderRadius:20,
    height:250, 
    width:"100%",   
  },
});


export default Congratulations;
