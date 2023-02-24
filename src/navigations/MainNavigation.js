import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MainScreen from '../scenes/auth/MainScreen';



const DrawerNavigation = createDrawerNavigator({
  MainScreen: {
    screen: MainScreen,
  }
},
  {
    initialRouteName: 'MainScreen',
    drawerPosition: 'left',
    backBehavior: "history",
    contentComponent: SideMenu,
    defaultNavigationOptions: {
      gestureEnabled: false,
      headerShown: false,
      headerTitle: () => null,
    }
  },
);

export default DrawerNavigation;
