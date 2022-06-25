import React,  {useState} from "react";

import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { useDispatch } from 'react-redux';
import Colors from "../../constants/Colors";

import * as authActions from '../../store/actions/auth';

const Signup = props=>{
    const [checkError, setCheckError] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [isEmailText, setIsEmailText] = useState('');
    const [isPassText, setIsPassText] = useState('');

    const dispatch = useDispatch();

    // Error Checking
    const errorHandler = ()=>{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(isEmailText) === false) {
        console.log("Email is Not Correct");
        return false;
      }
      else {
        setValidEmail(true);
        console.log("Email is Correct");
      }

      if(isPassText && isPassText.length > 6){
        setValidPassword(true);
      }
      else{
        console.log("Pass is inCorrect");
      }
    }

    // Sign up Handler
    const SignUpHandler = async ()=>{ 
        console.log("Sign Up function");
        errorHandler();
        if(validEmail === true && validPassword === true){
          const action =  dispatch(authActions.signup(isEmailText, isPassText));
            props.navigation.navigate('RegistrationShop');
        }
        else{
            if(validEmail === false){
                setCheckError(true);
                throw new Error("Invalid Email Please Enter a formatted email!")
            }
            if(validPassword === false){
                setCheckError(true);
                throw new Error("Invalid Password, Password must be of 7 character or more!")
            }
        }
        
      };

      if(checkError){
          return(
              <View style={styles.screen}>
                  <View style={styles.screenError}>
                      <Text style={{marginTop:70, fontSize:18,marginBottom:10, alignSelf:'center'}}>Invalid Email or Password! </Text>
                      <Button title="Try Again" onPress={()=>{
                          setCheckError(false)
                      }}></Button>
                  </View>
              </View>

          )
      }

    return(
    
        <View style={styles.screen}>
         <ScrollView >
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
        <Button title="Sign Up" onPress={SignUpHandler}></Button>
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
        </View>
       
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
    screenError:{
        marginTop:200,
        marginHorizontal:20,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#fff',
        height:200,
        width:'90%',
        borderRadius:10,
    },
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