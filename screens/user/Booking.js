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

const Booking = props => {


  return (
    <View>
          <View style={styles.detailsCard}>
          <Image ></Image>
          <Text style={{fontWeight:'bold', fontSize:24}}>Marhaba Mobile Shop</Text>
          <Text>+92333333333</Text>
          <Text style={{marginTop:10}}>Iphone 11</Text>
          <Text>Prcie: 70k PKR</Text>
         
          <HeaderButtons  HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-close-circle-outline' style={{marginTop:40}}  onPress={()=>{
                props.navigation.navigate('HomeScreen')}}/>
          </HeaderButtons>
         
          
          </View>
          
          <ScrollView style={{marginTop:30}}>

          <TextInput 
           style={styles.placeholder}
           placeholder="Name"
           keyboardType='default'
           />
           <TextInput 
           style={styles.placeholder}
           placeholder="Address"
           keyboardType='default'
           />  
          <TextInput 
           style={styles.placeholder}
           placeholder="Phone"
           keyboardType='number-pad'
           />
          <TextInput 
           style={styles.placeholder}
           placeholder="Quantity"
           keyboardType='number-pad'
           />
          </ScrollView>
          <View style={{marginTop:20}}>
            <View style={styles.bookNow}>
            <Button title='Book Now' color={'#13D996'} onPress={()=>{props.navigation.navigate('Congratulations')}}/>
            </View>
            <View style={styles.installment}>
            <Button title='Installments'  />
            </View>
            
          </View>
    </View>
 
  );
};


Booking.navigationOptions = navigationData=> {
  return{
      headerTitle:"Booking",
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
    alignItems:'center'
  },
  detailsCard: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#13D996',
    borderBottomColor:'black',
    borderBottomWidth:3,
    borderBottomLeftRadius:70,
    borderBottomRightRadius:70,
    
  },
  placeholder: {
    height: 40,
    width:"90%",
    marginLeft:18,
    marginTop:10,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#DFE3BB',
    
  },
  bookNow:{
    width:'50%',
    alignContent:'center',
    marginVertical:10,
    marginHorizontal:'25%',
  },
  installment:{
    width:'50%',
    marginVertical:10,
    alignContent:'center',
    marginHorizontal:'25%',
  },
});


export default Booking;
