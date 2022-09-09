import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import ResetPassword from '../Screens/Auth/ResetPassword';
import ConfirmEmail from '../Screens/Auth/ConfirmEmail';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import CreateAccount from '../Screens/Auth/CreateAccount';
import LoginScreen from '../Screens/Auth/Login';

const Stack = createNativeStackNavigator();

export default function NavigationAuth() {
  return (
    <Stack.Navigator headerShown="false">
      <Stack.Screen
        options={{headerShown: 'false'}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: 'false'}}
      />
      <Stack.Screen
        name="ConfirmEmail"
        component={ConfirmEmail}
        options={{headerShown: 'false'}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: 'false'}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: 'false'}}
      />
    </Stack.Navigator>
  );
}
