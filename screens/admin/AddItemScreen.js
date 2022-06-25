import React, {useState, useEffect} from "react";
import {View,ScrollView, Text,TextInput,Button, Image, StyleSheet, TouchableNativeFeedback, LogBox} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import {Dropdown} from  'react-native-material-dropdown-v2-fixed';
import Colors from "../../constants/Colors";
import ImgPicker from "../../components/ImgPicker";
import { getDownloadURL, getStorage, ref, uploadBytes,  } from "@firebase/storage";
import * as productsActions from '../../store/actions/addItem';
import { useSelector, useDispatch } from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown'

//import { storage } from "../../firebase";
const AddItemScreen = props=>{
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    LogBox.ignoreLogs(['componentWillReceiveProps']);

}, [])
  let selectedCategory = null;
  let selectedBrand = null;

    const [selectedImage, setSelectedImage] = useState(null);

    const [isItemName, setIsItemName] = useState('');
    const [isFeatures, setIsFeatures] = useState('');
    const [isPrice, setIsPrice] = useState(null);
    const [isQuantity, setIsQuantity] = useState('');
    const [isItemBrand, setIsItemBrand] = useState('');
    const [isItemCategory, setIsItemCategory] = useState('');
    
    const userId = useSelector(state => state.auth.userId);
    //console.log(userId)
    const dispatch = useDispatch();
  
    const uploadImage = async ()=>{
     // console.log(selectedBrand);
     // console.log(selectedCategory);
      const imageURI = selectedImage;
      //console.log(selectedImage);
      let fileName = selectedImage.substring(selectedImage.lastIndexOf('/')+1);
      const storage = getStorage();
      const img = await fetch(imageURI);
      const blob = await img.blob();
     // console.log(fileName);
      try {
        const imgRef = ref(storage, fileName);
        await uploadBytes(imgRef, blob).then((snapShot ) => {
          console.log("Successfully added ");
        });
          //await storage().ref(fileName).putFile(imageURI);
      } catch (error) {
        console.log(error)
      }
       getDownloadURL(ref(storage, fileName)).then((url) =>{
        console.log(url);
      
        dispatch(productsActions.createItem(isItemName, isPrice, url, selectedCategory, selectedBrand, isFeatures,isQuantity, userId));

      });
    }  

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    };

const getBrandId = brand =>{

  if(brand == 'Apple'){
    selectedBrand = 1;
  }
  else if (brand == 'Samsung') {
    selectedBrand = 2;
  }
  else if (brand == 'Oppo') {
    selectedBrand = 3;
  }
  else if (brand == 'Vivo') {
    selectedBrand = 4;
  }
  else if (brand == 'Infinix') {
    selectedBrand = 5;
  }
  else if (brand == 'Nokia') {
    selectedBrand = 6;
  }
  else if (brand == 'Motorola') {
    selectedBrand = 7;
  }
  else if (brand == 'Lenovo') {
    selectedBrand = 8;
  }
  else if (brand == 'Techno') {
    selectedBrand = 9;
  } else if (brand == 'Huwawei') {
    selectedBrand = 10;
  }     
}

const getCategoryId = cat =>{

  if(cat == 'Cell Phone'){
    selectedCategory = 1;
  }
  else if (cat == 'Charger') {
    selectedCategory = 2;
  }
  else if (cat == 'Data Cable') {
    selectedCategory = 3;
  }
  else if (cat == 'Tablet') {
    selectedCategory = 4;
  }
  else if (cat == 'Handfree') {
    selectedCategory = 5;
  }
  else if (cat == 'Protector') {
    selectedCategory = 6;
  }
  
}
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
        value: 'Lenovo',
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
                onChangeText={setIsItemName}
                value={isItemName}
                />
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Product Features"
                keyboardType='name-phone-pad'
                onChangeText={setIsFeatures}
                value={isFeatures}
                />
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Product Price"
                keyboardType='number-pad'
                onChangeText={setIsPrice}
                value={isPrice}
                />
                <TextInput 
                numberOfLines={1}
                style={styles.placeholder}
                placeholder="Quantity"
                keyboardType='number-pad'
                onChangeText={setIsQuantity}
                value={isQuantity}
                />
                 </View>
                
            <Dropdown
          label='Select Brand'
          data={dataBrands}
          containerStyle={styles.inputContainerStyle}
          onChangeText={setIsItemBrand}
          value={isItemBrand}
          
          />

        <Dropdown
          label='Select Category'
          data={dataCategory}
          containerStyle={styles.inputContainerStyle2}
          onChangeText={setIsItemCategory}
          value={isItemCategory}
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <View style={styles.button}>
        <Button
        title="Submit"
        color={Colors.blueButton}
        onPress={()=>{
            getBrandId(isItemBrand);
            getCategoryId(isItemCategory);
            uploadImage();
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