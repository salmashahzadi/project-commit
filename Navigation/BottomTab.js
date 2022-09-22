import * as React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ContactNav, DealNav, OrgNav} from './TabScreens';
import MyDrawer from './Drawer';
import Menue from '../Screens/Home/Menue';
// import imagePath from '../Constants/imagePath';
import {View, Text, Button, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ToDo from '../Screens/ToDoApp/ToDo';
import colors from '../config/colors';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarColor: '#f8f4f4',
      }}
      // style={{flexDirection: 'row'}}
      initialRouteName="Home"
      activeColor={colors.light}
      inactiveColor="lightgray"
      barStyle={{paddingBottom: 0}}>
      <Tab.Screen
        name="Home"
        component={Menue}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={DealNav}
        options={{
          tabBarLabel: 'Deals',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="dollar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactNav}
        options={{
          tabBarLabel: 'Contacts',
          tabBarColor: '#694fad',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="contacts" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Organization"
        component={OrgNav}
        options={{
          tabBarLabel: 'Organizations',
          tabBarColor: '#d02860',
          tabBarIcon: ({color, size}) => (
            <Octicons name="organization" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
