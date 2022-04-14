import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';

const SplashScreen = props => {

  return (
   <View style={styles.screen}>
       <Image style={styles.Image}  source={{uri :'https://thumbs.dreamstime.com/b/mobile-phone-smartphone-store-shop-logo-template-you-can-use-many-purpose-such-new-project-presentation-document-website-etc-148053871.jpg'}}  ></Image>
       <Text style={styles.text}>Welcome to Online Mobile Stores </Text>
       <View style={styles.Button}>
       <Button onPress={()=>{props.navigation.navigate('HomeScreen')}}  title="Get Started" color="#143875" accessibilityLabel="Tap on Me"/>
       </View>
   </View>
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent
  },
  text:{
      fontSize:20,
      fontWeight:'bold'
  },
  Image:{
    margin:10,
    height: 120,
    width: 120,
    borderRadius: 40
  },
  Button:{
      margin:10,
  }
});

export default SplashScreen;
