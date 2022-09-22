import * as React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddAgent from '../Screens/Agents/AddAgent';
import Menue from '../Screens/Home/Menue';
import FinalNavigation from './FinalNavigation';
import DrawerContent from '../Screens/Drawer/DrawerContent';
import Foundation from 'react-native-vector-icons/Foundation';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        options={{
          drawerIcon: ({color, size}) => (
            <Foundation name="list" color={color} size={size} />
          ),
        }}
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Nav" component={FinalNavigation} />
        {/* <Drawer.Screen name="Menue" component={Menue} />
        <Drawer.Screen name="AddAgent" component={AddAgent} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 20,
//     backgroundColor: colors.white,
//   },
//   screen: {
//     backgroundColor: colors.light,
//   },
// });
