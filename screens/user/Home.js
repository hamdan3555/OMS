import React  from "react";
import {ScrollView,View,  Text, FlatList, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {Searchbar} from 'react-native-paper'
import ProductItem from "../../components/ProductItem";
import CustomHeaderButton from "../../components/HeaderButtons";
import { ITEMS, shopsDetails} from "../../Data/dummydata";
import item from "../../models/items";
import Colors from "../../constants/Colors";

const Home = props =>{
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  
    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetails', {
          productId: id,
          productTitle: title
        });
      };

    const renderItem =(itemData) =>{
        return(
            <ProductItem 
                title={itemData.item.title}
                URI={itemData.item.URI}
                Price={itemData.item.price}
                onSelect = {selectItemHandler}

            />
        ) ;
        
    }
    
    return(
            <View style={styles.container}>
            <Searchbar style={{marginTop:30,marginHorizontal:10,}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
        <Text style={styles.text}>Popular Items :</Text>

        <View style={styles.item}>    
        <FlatList keyExtractor={(item, index)=> item.id}
            data={ITEMS}
            renderItem={renderItem}
            numColumns={3}/>      
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
        flex:1,
        justifyContent: 'center',
        alignItems:'center',    
        margin:10
      },
      text:{
          marginTop:35,
          marginRight:170,
          fontSize:15,
          fontWeight:'bold'
      }
});

export default Home;