import React, {useState} from "react";
import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import ImgPicker from "../../components/ImgPicker";

const AddItemScreen = props=>{
    const [selectedImage, setSelectedImage] = useState();
    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    };

    let dataCategory = [{
        value: 'Cell Phone',
      }, {
        value: 'Charger',
      }, {
        value: 'Data Cable',
      },{
        value: 'Tablet',
      },{
        value: 'Handfree',
      },{
        value: 'Protector',
      },
      
    ];

    let dataBrands = [{
        value: 'Apple',
      }, {
        value: 'Samsung',
      }, {
        value: 'Oppo',
      },{
        value: 'Vivo',
      },{
        value: 'Infinix',
      },{
        value: 'Huwawei',
      },{
        value: 'Nokia',
      },
      {
        value: 'Motorola',
      },
      {
        value: 'Lenove',
      },{
        value: 'Techno',
      }
      
    ];

    return(
        <View style={styles.screen}>
                 <View style={{marginTop:40}}>
                 <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Product Name"
                keyboardType='name-phone-pad'
                />
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Product Features"
                keyboardType='name-phone-pad'
                />
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Product Price"
                keyboardType='number-pad'
                />
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Quantity"
                keyboardType='number-pad'
                />
                 </View>
                
                 <Dropdown
          label='Select Brand'
          data={dataBrands}
          containerStyle={styles.inputContainerStyle}
        
          pickerStyle={{}}
          selectedItemColor={'black'}
          itemColor={'green'}
          baseColor={'grey'}
          fontSize={14}
          labelTextStyle={{color:'black', }}    
          iconColor='black'
          dropdownPosition={0}
          rippleCentered
         
          
        />

<Dropdown
          label='Select category'
          data={dataCategory}
          containerStyle={styles.inputContainerStyle2}
        
          pickerStyle={{}}
          selectedItemColor={'black'}
          itemColor={'green'}
          baseColor={'grey'}
          fontSize={14}
          labelTextStyle={{color:'black', }}    
          iconColor='black'
          dropdownPosition={0}
          rippleCentered
         
          
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <View style={styles.button}>
        <Button
        title="Submit"
        color={Colors.blueButton}
        onPress={()=>{
            props.navigation.navigate('MyShop')
        }}
      />
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
    placeholder: {
        height: 40,
        width:200,
        marginBottom: 10,
        marginHorizontal:5,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        backgroundColor:'#DFE3BB'
      },
      inputContainerStyle:{
        height: 40,
        width:200,
        marginBottom: 10,
        marginHorizontal:5,
     
        padding: 10,
        
      },
      inputContainerStyle2:{
        height: 40,
        width:200,
        marginTop: 30,
        marginBottom:30,
        marginHorizontal:5,
        padding: 10,
        
      },
      button:{
          marginTop:10,
      }
});

AddItemScreen.navigationOptions = navigationData=>{
    return{
        headerTitle: 'Item Details',
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header
  
          }, 
          headerTintColor:Colors.headerTint, 
  };   
    };


export default AddItemScreen;