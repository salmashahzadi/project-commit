import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
//import screens
import ResetPassword from './Screens/Auth/ResetPassword';
import ConfirmEmail from './Screens/Auth/ConfirmEmail';
import ForgotPassword from './Screens/Auth/ForgotPassword';
import CreateAccount from './Screens/Auth/CreateAccount';
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import BottomTab from './Navigation/BottomTab';
import MyDrawer from './Navigation/NavigationDrawerHeader';
import LoginScreen from './Screens/Auth/Login';
import DrawerContent from './Screens/Drawer/DrawerNavigatorRoutes';
import {DrawerNav} from './Navigation/TabScreens';
import MyTabs from './Navigation/NavigationDrawerHeader';
import DrawerNavigatorRoutes from './Screens/Drawer/DrawerNavigatorRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Auths = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      {/* <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} /> */}
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'SplashScreen';
  } else {
    routeName = 'BottomTab';
  }
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Auths"
            component={Auths}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
