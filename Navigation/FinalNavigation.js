import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Import Screens
import SplashScreen from '../Screens/SplashScreen/SplashScreen';

import NavigationAuth from './AuthNav';
import BottomTab from './BottomTab';
import MyDrawer from './Drawer';

const Stack = createNativeStackNavigator();

const FinalNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
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
