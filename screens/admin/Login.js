import React,  {useState} from "react";
import {ToastAndroid,ScrollView,View, Text,Button, Image, StyleSheet,TextInput, TouchableNativeFeedback} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import Colors from "../../constants/Colors";


const Login = props=>{
    const [isEmailText, setIsEmailText] = useState('');
    const [isPassText, setIsPassText] = useState('');
    const dispatch = useDispatch();
    const showToast = () => {
        ToastAndroid.show("Invalid Email or Password !", ToastAndroid.SHORT);
      };

      const SignInHandler = async ()=>{ 
        dispatch(authActions.login(isEmailText, setIsEmailText));
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
        <View style={styles.screen}>
            <ScrollView style={styles.card}>
            <Image style={styles.Image}  source={{uri:'https://c.neh.tw/thumb/f/720/comvecteezy331973.jpg'}}/>                
           <View style={{flexDirection:'row'}}>
           <View style={{marginTop:15, marginLeft:20}}>
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
           <View style={{marginTop:15, marginLeft:20}}>
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
        <View style={styles.button}>
        <Button title="Login" onPress={()=>{SignInHandler}}> </Button>
        </View>
        <View style={styles.signup}>
        <Text >Don't have any account! </Text>
        <TouchableNativeFeedback style={{flex:1, opacity:0.8}} onPress={()=>{
            props.navigation.navigate({
                routeName:'Signup',
            })
        }} >
            <View>
            <Text style={styles.signupText}>Signup</Text>
    
            </View>
        </TouchableNativeFeedback>
        </View>          
         </ScrollView>
        </View>
    )
}

Login.navigationOptions = navigationData=>{
    return{
        headerTitle: 'Login',
        headerStyle: {
            backgroundColor: Colors.headerBackground,
          },
          headerTintColor:Colors.headerTint,
    };
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#DADBD6'
    },
    card:{
        flex:1,
        width:"80%",
        height:200,
        alignContent:'center',
        margin:50,
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
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        overflow:'hidden',
        backgroundColor:'#DFE3BB'
      },
      button:{
          marginTop:10,
          width:'20%',
          marginLeft:110,
      },
      signup:{
        flexDirection:'row',
          marginTop:30,
          marginLeft:40,
          alignItems:'center'
      },
      Image:{
        height:80,
        width:80,
        borderRadius:10,
        marginTop:50,
        marginLeft:100,
        marginBottom:10,
    },
    signupText:{
        fontWeight:'bold',
        color:'#0693E3',
    }
});

export default Login;