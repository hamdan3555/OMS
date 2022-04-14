import React from 'react';
import {
  createAppContainer, createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/user/Home';
import Booking from '../screens/user/Booking';
import Brands from '../screens/user/Brands';
import ProductDetails from '../screens/user/ProductDetails';
import Shops  from '../screens/user/Shops';
import CategoryDetails from '../screens/user/CategoryDetails';
import BrandDetails from '../screens/user/BrandDetails';
import SplashScreen from '../screens/user/SplashScreen';
import CategoryScreen from '../screens/user/CategoryScreen';
import Login from '../screens/admin/Login';
import SignUp from '../screens/admin/SignUp';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import MyShop from '../screens/admin/MyShop';
import RegistrationShop from '../screens/admin/RegistrationShop';
import ShopDetailScreen from '../screens/user/ShopDetailScreen';
import ShopDetailsPhone from '../screens/user/ShopDetailsPhone';
import ShopDetailAccessories from '../screens/user/ShopDetailAccessories';
import ShopDetailInstallments from '../screens/user/ShopDetailInstallments';
import ShopInformation from '../screens/user/ShopInformation';
import Congratulations from '../screens/user/Congratulations';
import AddItemScreen from '../screens/admin/AddItemScreen';
import DailyCheckinsCheckouts from '../screens/admin/DailyCheckinsCheckouts';
import MonthlyReports from '../screens/admin/MonthlyReports';
import ExistingProducts from '../screens/admin/ExistingProducts';
const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  };

const MyNavigator = createStackNavigator(
    {
      HomeScreen: Home,
      ProductDetails: ProductDetails,
      Booking: Booking,
      Congratulations:Congratulations,
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'home' : 'home'}
            size={20}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );

  const brandNavigator = createStackNavigator({
    Brands: Brands,
    BrandDetails: BrandDetails,
    Booking: Booking,
    Congratulations:Congratulations,

  }, {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'earth' : 'ios-cart'}
          size={20}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
  
  
  )


  const categoryNavigator = createStackNavigator({
    CategoryScreen: CategoryScreen,
    CategoryDetails: CategoryDetails,
    Booking: Booking,
    Congratulations:Congratulations,
  }, {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={20}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
  )

  const shopNavigator = createStackNavigator({
    Shops: Shops,
    ShopDetails:ShopDetailScreen,
    ShopDetailPhone:ShopDetailsPhone,
    ShopDetailAccessories: ShopDetailAccessories,
    ShopDetailInstallments:ShopDetailInstallments,
    ShopInformation:ShopInformation,
    
  }, {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={20}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
  )

  const adminNavigator = createStackNavigator({
    Login:Login,
    Signup: SignUp,
    RegistrationShop:RegistrationShop,
    MyShop:MyShop,
    AddItemScreen:AddItemScreen,
    DailyCheckinsCheckouts:DailyCheckinsCheckouts,
    MonthlyReports:MonthlyReports,
    ExistingProducts:ExistingProducts,
    ShopDetailInstallments:ShopDetailInstallments 
}, {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'person' : 'ios-cart'}
          size={20}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
  )

  const TabNav = createBottomTabNavigator({ 
      
    HomeScreen: {screen: MyNavigator, navigationOptions:{
      tabBarIcon: (tabInfo)=>{
        return <Ionicons name='home' size={25}  color={tabInfo.tintColor}/>
      }
    }},
    Brands: {screen: brandNavigator, navigationOptions:{
      tabBarIcon: (tabInfo)=>{
        return <Ionicons name='earth' size={25}  color={tabInfo.tintColor}/>
      }
    }},
    Shops: {screen: shopNavigator, navigationOptions:{
        tabBarIcon: (tabInfo)=>{
          return <Ionicons name='md-cart' size={25}  color={tabInfo.tintColor}/>
        }
      }},
      Category: {screen: categoryNavigator, navigationOptions:{
        tabBarIcon: (tabInfo)=>{
          return <Ionicons name='filter' size={25}  color={tabInfo.tintColor}/>
        }
      }},
  }, {tabBarOptions:{
    activeTintColor:Colors.accentColor,
    headerStyle: {
        height: 200, // Specify the height of your custom header
      }
  }});

  const drawerNavigator = createDrawerNavigator(
    {
        MyDrawer:TabNav,
        Home: MyNavigator,
        Shops: shopNavigator,
        Barnds: brandNavigator,
        Admin: adminNavigator,

    },
    {
      contentOptions: {
        activeTintColor: Colors.primary,

      }
    }
  );

  const MainNavigator = createSwitchNavigator({
    Startup: SplashScreen,
    drawer: drawerNavigator,
    // test comment
    
  });

  export default createAppContainer(MainNavigator);