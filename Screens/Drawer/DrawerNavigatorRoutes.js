// import React from 'react';
// // Import Navigators from React Navigation
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import NavigationDrawerHeader from '../../Navigation/NavigationDrawerHeader';
// import AgentNavigator from '../Agents/AgentNavigator';
// import CustomSidebarMenu from '../../Navigation/CustomSideBarMenu';
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// // const homeScreenStack = ({navigation}) => {
// //   return (
// //     <Stack.Navigator initialRouteName="HomeScreen">
// //       <Stack.Screen
// //         name="HomeScreen"
// //         component={HomeScreen}
// //         options={{
// //           title: 'Home', //Set Header Title
// //           headerLeft: () => (
// //             <NavigationDrawerHeader navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: '#307ecc', //Set Header color
// //           },
// //           headerTintColor: '#fff', //Set Header text color
// //           headerTitleStyle: {
// //             fontWeight: 'bold', //Set Header text style
// //           },
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // };

// const AgentScreenStack = ({navigation}) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="AgentScreen"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerHeader navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#307ecc', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="SettingsScreen"
//         component={AgentNavigator}
//         options={{
//           title: 'Agents', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const DrawerNavigatorRoutes = props => {
//   return (
//     // <NavigationContainer>
//     <Drawer.Navigator
//       drawerContentOptions={{
//         activeTintColor: '#cee1f2',
//         color: '#cee1f2',
//         itemStyle: {marginVertical: 5, color: 'white'},
//         labelStyle: {
//           color: '#d8d8d8',
//         },
//       }}
//       screenOptions={{headerShown: false}}
//       drawerContent={CustomSidebarMenu}>
//       <Drawer.Screen
//         name="AddAgent"
//         options={{drawerLabel: 'Agent Screen'}}
//         component={AgentScreenStack}
//       />
//       {/* <Drawer.Screen
//         name="settingScreenStack"
//         options={{drawerLabel: 'Setting Screen'}}
//         component={settingScreenStack}
//       /> */}
//     </Drawer.Navigator>
//     // </NavigationContainer>
//   );
// };

// export default DrawerNavigatorRoutes;
