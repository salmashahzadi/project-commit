import React from 'react';
import 'react-native-gesture-handler';
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Import Screens
// import SplashScreen from '../Screens/SplashScreen/SplashScreen';
// import Home from '../Screens/Home/Home';
// import MyDrawer from './Drawer';
import NavigationAuth from './AuthNav';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const FinalNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown="false" initialRouteName="NavigationAuth">
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="NavigationAuth"
          component={NavigationAuth}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: 'false'}}
        /> */}
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FinalNavigation;
