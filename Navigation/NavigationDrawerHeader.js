// import * as React from 'react';
// import {View, Button, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import AddAgent from '../Screens/Agents/AddAgent';
// import Menue from '../Screens/Home/Menue';
// import FinalNavigation from './FinalNavigation';
// import DrawerContent from '../Screens/Drawer/DrawerContent';
// import Foundation from 'react-native-vector-icons/Foundation';

// const Drawer = createDrawerNavigator();

// export default function MyDrawer() {
//   const toggleDrawer = () => {
//     props.navigationProps.toggleDrawer();
//   };
//   return (
//     // <TouchableOpacity onPress={toggleDrawer}>
//     //   </TouchableOpacity>
//     // <NavigationContainer>
//     <Drawer.Navigator
//       options={{
//         drawerIcon: ({color, size}) => (
//           <Foundation name="list" color={color} size={size} />
//         ),
//       }}
//       screenOptions={{headerShown: false}}
//       drawerContent={props => <DrawerContent {...props} />}>
//       <Drawer.Screen name="Nav" component={AddAgent} />
//       {/* <Drawer.Screen name="Menue" component={Menue} />
//         <Drawer.Screen name="AddAgent" component={AddAgent} /> */}
//     </Drawer.Navigator>
//     // </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 20,
//     backgroundColor: colors.white,
//   },
//   screen: {
//     backgroundColor: colors.light,
//   },
// });
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
