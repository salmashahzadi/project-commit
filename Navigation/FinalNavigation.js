import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Import Screens
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import NavigationAuth from './AuthNav';
import BottomTab from './BottomTab';
import MyDrawer from './Drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Value} from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

const FinalNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(Value => {
      if (Value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      // <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="NavigationAuth"
          component={NavigationAuth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      // </NavigationContainer>
    );
  } else {
    return <BottomTab />;
  }

  // return (
  //   // <NavigationContainer>
  //   <Stack.Navigator
  //     screenOptions={{headerShown: false}}
  //     initialRouteName="SplashScreen">
  //     <Stack.Screen name="SplashScreen" component={SplashScreen} />
  //     <Stack.Screen
  //       name="NavigationAuth"
  //       component={NavigationAuth}
  //       options={{headerShown: false}}
  //     />
  //     <Stack.Screen
  //       name="BottomTab"
  //       component={BottomTab}
  //       options={{headerShown: false}}
  //     />
  //   </Stack.Navigator>
  //   // </NavigationContainer>
  // );
};

export default FinalNavigation;
