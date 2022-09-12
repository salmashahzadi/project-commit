import * as React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ContactNav, DealNav, OrgNav} from './TabScreens';
import MyDrawer from './Drawer';
import Menue from '../Screens/Home/Menue';
import imagePath from '../Constants/imagePath';
import {View, Text, Button, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{paddingBottom: 0}}>
      <Tab.Screen
        name="Home"
        component={Menue}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={DealNav}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="dollar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactNav}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="contacts" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Organization"
        component={OrgNav}
        options={{
          tabBarIcon: ({color}) => (
            <Octicons name="organization" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
