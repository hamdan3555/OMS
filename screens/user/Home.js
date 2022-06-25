import React, {useState, useEffect, useCallback}  from "react";
import {ScrollView, View,  Text, FlatList, StyleSheet, LogBox} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {Searchbar} from 'react-native-paper'
import ProductItem from "../../components/ProductItem";
import CustomHeaderButton from "../../components/HeaderButtons";
import Colors from "../../constants/Colors";
import Accessories from "../../components/Accessories";
import * as shopActions from '../../store/actions/addShop';
import * as orderActions from '../../store/actions/order';

import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from '../../store/actions/addItem';
// Home Screen
const Home = props =>{
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const loadProducts = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
          await dispatch(productsActions.fetchItems());
          await dispatch(shopActions.fetchShops());
          await dispatch(orderActions.fetchOrders());


        } catch (err) {
          setError(err.message);
        }
        setIsRefreshing(false);
      }, [dispatch, setIsLoading, setError]);
    
      useEffect(() => {
        const willFocusSub = props.navigation.addListener(
          'willFocus',
          loadProducts
        );
    
            return () => {
          willFocusSub.remove();
        };
      }, [loadProducts]);
    
      useEffect(() => {
        setIsLoading(true);
        loadProducts().then(() => {
          setIsLoading(false);
        });
      }, [dispatch, loadProducts]);

    useEffect(()=>{
        LogBox.ignoreLogs(['Setting a timer for a long period of time'])
       });
       const productsCellPhones = useSelector(state => state.items.availableProducts.filter(prod => prod.categoryId === 1));
       const productsAccessories = useSelector(state => state.items.availableProducts.filter(prod => prod.categoryId !== 1));

  //console.log(productsAccessories)
    const renderItem =(itemData) =>{
        return(
            <ProductItem 
                title={itemData.item.title}
                URI={itemData.item.URI}
                Price={itemData.item.price}
                onSelect = {()=>{
                    props.navigation.navigate('ProductDetails', {
                    productId: itemData.item.id,
                    });
                }}
            />
        ) ;      
    };

    const renderItemAccessories =(itemData) =>{
        return(
            <Accessories 
                title={itemData.item.title}
                URI={itemData.item.URI}
                Price={itemData.item.price}
                onSelect = {()=>{
                    props.navigation.navigate('ProductDetails', {
                    productId: itemData.item.id,
                    })
                }}
            />
        ) ;
        
      }
    
    return(
            <View style={styles.container}>
            <Text style={{alignContent:'center', marginTop:30}}>Get Cell Phone of your Choice</Text>
        <Text style={styles.text}>Cell Phones :</Text>
        <View style={styles.item}>    
        <FlatList keyExtractor={(item, index)=> item.id}
            data={productsCellPhones}
            renderItem={renderItem}
            numColumns={3}/>      
        </View>

        <View >
       <Text style={{marginLeft:20, fontSize:17, fontWeight:'bold', textDecorationLine: 'underline', margin:10}}>Other Accessories:</Text>
        <View style={styles.accessories}>
        <FlatList style={{flex:1, flexDirection:'row', }} 
            keyExtractor={(item, index)=> item.id}
            data={productsAccessories}
            renderItem={renderItemAccessories}
            horizontal={true}
           />
        </View>
      </View>
        
        </View>
        
        
    );
}

Home.navigationOptions = navigationData=> {
    return{
        headerTitle:"Home",
        headerStyle:{
            backgroundColor:Colors.headerBackground,
            height: 80, // Specify the height of your custom header

          },
          
          headerTintColor:Colors.headerTint,
          headerLeft: ()=> 
                <HeaderButtons  HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu'  onPress={()=>{
                navigationData.navigation.toggleDrawer();
          }}/>
          </HeaderButtons>     
    }
   
};




const styles=StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems:'center',
        backgroundColor:'#DADBD6'
      },
      item:{
        height:'50%',
        justifyContent: 'center',
        alignItems:'center',    
        margin:10
      },
      text:{
          marginTop:35,
          marginRight:170,
          fontSize:15,
          fontWeight:'bold'
      },
      accessories:{
  
        height:'40%',
        marginLeft:5, 
        backgroundColor:'white',
        borderRadius:10,
        padding:5
      }
});

export default Home;