import * as React from 'react';
import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddAgent from '../Screens/Agents/AddAgent';
import Menue from '../Screens/Home/Menue';
// import ChangePassword from '../Screens/Auth/ChangePassword';

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Menue" component={Menue} />
      <Drawer.Screen name="AddAgent" component={AddAgent} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}
