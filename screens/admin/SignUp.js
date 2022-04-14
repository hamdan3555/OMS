import React,  {useState} from "react";

import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import Colors from "../../constants/Colors";

const Signup = props=>{

    const [isEmailText, setIsEmailText] = useState('');
    const [isPassText, setIsPassText] = useState('');
    const dispatch = useDispatch();

    const SignUpHandler = async ()=>{ 
        console.log("Sign Up function");
        dispatch(authActions.signup(isEmailText, isPassText));
        setError(null);
        setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate('MyShop');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
      };

    return(
        <ScrollView style={styles.screen}>
            <View style={styles.card}>
            <Image style={styles.Image}  source={{uri:'https://c.neh.tw/thumb/f/720/comvecteezy331973.jpg'}}/>                
           <View style={{flexDirection:'row'}}>
           <View style={{marginTop:15}}>
           <Ionicons name="mail-sharp" size={24} color="black" />
            </View>
            <TextInput 
           style={styles.placeholder}
           placeholder="Email Address"
           keyboardType='name-phone-pad'
           onChangeText={setIsEmailText}
           value={isEmailText}
           />
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{marginTop:15}}>
           <Ionicons name="md-lock-closed-sharp" size={24} color="black" />
            </View>    
            <TextInput 
           style={styles.placeholder}
           placeholder="Password"
           keyboardType='default'
           secureTextEntry={true}
           password={true}
           onChangeText={setIsPassText}
           value={isPassText}
           />
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{marginTop:15}}>
           <Ionicons name="md-lock-closed-sharp" size={24} color="black" />
            </View>    
           <TextInput 
           style={styles.placeholder}
           placeholder="Confirm Password"
           keyboardType='default'
           secureTextEntry={true}
           password={true}
           />
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{marginTop:15}}>
           <Ionicons name="md-call" size={24} color="black" />
            </View>    
           <TextInput 
           style={styles.placeholder}
           placeholder="Phone"
           keyboardType='number-pad'
           
           />
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{marginTop:15}}>
           <Ionicons name="md-home" size={24} color="black" />
            </View>    
           <TextInput 
           style={styles.placeholder}
           placeholder="Address"
           keyboardType='default'
           
           />
           </View>
        <View style={styles.button}>
        <Button title="Sign Up" onPress={()=>{props.navigation.navigate('RegistrationShop')}}></Button>
        </View>
        <View style={styles.signup}>
        <Text >Already have an account! </Text>
        <TouchableNativeFeedback style={{flex:1, opacity:0.8}} onPress={()=>{
            props.navigation.navigate({
                routeName:'Login',
            })
        }} >
            <View>
            <Text style={styles.signupText}>Login</Text>
    
            </View>
        </TouchableNativeFeedback>
        </View>
          
   
            </View>
        </ScrollView>
    )
}


Signup.navigationOptions = navigationData=>{
    return{
        headerTitle: 'SignUp',
        headerStyle: {
            backgroundColor: Colors.headerBackground,
          },
          headerTintColor:Colors.headerTint,
    };
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#DADBD6'
    },
    card:{
        flex:1,
        width:"80%",
        alignItems:'center',
        alignContent:'center',
        marginVertical:50,
        marginTop:50,
        marginLeft:35,
        backgroundColor:'white',
        borderRadius:10,
        elevation:2,
    },
    text:{
        marginTop:30,
        marginBottom:5,
        fontSize:25,
        fontWeight:'bold'
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
      button:{
          marginTop:10,
      },
      signup:{
        flexDirection:'row',
          marginTop:20,
          marginBottom:10,
          alignItems:'center'
      },
      Image:{
        height:80,
        width:80,
        borderRadius:10,
        marginTop:20,
        marginBottom:10,
    },
    signupText:{
        fontWeight:'bold',
        color:'#0693E3'
    }
});

export default Signup;