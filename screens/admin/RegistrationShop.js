import React ,{useState}from "react";
import { View, TextInput, Button, ScrollView, StyleSheet, Text,  } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import * as productsActions from '../../store/actions/addShop';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';    

const RegistrationShop = props=>{
    const [isShopName, setIsShopName] = useState('');
    const [isShopAddress, setIsShopAddress] = useState('');
    const [isShopContact, setIsShopContact] = useState('');
    const [isShopAbout, setIsShopAbout] = useState('');
    const [isShopEmail, setIsShopEmail] = useState('');

    const userId = useSelector(state => state.auth.userId);
    console.log(userId)
    const dispatch = useDispatch();
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight:'bold', margin:15}}>Add Details</Text>
            <View>
                 
               
                <View style={{flexDirection:'row'}}>
                 <View style={{marginTop:15}}>
                <Ionicons name="md-home" size={24} color="black" />
                </View>
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Shop Name"
                keyboardType='name-phone-pad'
                onChangeText={setIsShopName}
                value={isShopName}
                />
                </View>
                <View style={{flexDirection:'row'}}>
                 <View style={{marginTop:15}}>
                <Ionicons name="md-home" size={24} color="black" />
                </View>
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Email"
                keyboardType='name-phone-pad'
                onChangeText={setIsShopEmail}
                value={isShopEmail}
                />
                </View>

                <View style={{flexDirection:'row'}}>
                 <View style={{marginTop:15}}>
                <Ionicons name="ios-location-sharp" size={24} color="black" />
                </View>
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Shop Address"
                keyboardType='name-phone-pad'
                onChangeText={setIsShopAddress}
                value={isShopAddress}
                />
                </View>
                <View style={{flexDirection:'row'}}>
                 <View style={{marginTop:15}}>
                <Ionicons name="md-call" size={24} color="black" />
                </View>
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Contact Number"
                keyboardType='number-pad'
                onChangeText={setIsShopContact}
                value={isShopContact}
                />
                </View>
                <View style={{flexDirection:'row'}}>
                 <View style={{marginTop:15}}>
                <Ionicons name="person" size={24} color="black" />
                </View>
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="About Shop"
                keyboardType='name-phone-pad'
                onChangeText={setIsShopAbout}
                value={isShopAbout}
                />
                </View>

                <View style={{alignItems:'center', marginTop:15, marginLeft:10, }}>
                    <Button title="Add Shop" onPress={()=>{
                        dispatch(productsActions.createShop(userId, isShopName, isShopAddress, isShopAbout, isShopContact, isShopEmail));
                        props.navigation.navigate('MyShop')
                    }}></Button>
                </View>

            </View>
        </View>
    )
}

RegistrationShop.navigationOptions= navigationData=>{
    return{
        headerTitle:"Registration",
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
          },
          
          headerTintColor:Colors.headerTint,
         
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
       // backgroundColor:'#DADBD6'
      },
      placeholder: {
        height: 40,
        width:200,
        marginVertical: 10,
        marginHorizontal:5,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        backgroundColor:'#DFE3BB'
      },
});

export default RegistrationShop;