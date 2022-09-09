import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ContactNav, DealNav, OrgNav} from './TabScreens';
import MyDrawer from './Drawer';
import Menue from '../Screens/Home/Menue';
import imagePath from '../Constants/imagePath';
import {View, Text, Button, Image} from 'react-native';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Menue}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image source={imagePath.icHome} />;
          },
        }}
      />
      <Tab.Screen
        name="Deals"
        component={DealNav}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image source={imagePath.icDeal} />;
          },
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactNav}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image source={imagePath.icCont} />;
          },
        }}
      />
      <Tab.Screen
        name="Organization"
        component={OrgNav}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image source={imagePath.icOrg} />;
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
