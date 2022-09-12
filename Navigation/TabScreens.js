import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DealScreen from '../Screens/Deals/Deals';
import CreateDeal from '../Screens/Deals/CreateDeals';
import OrganizationScreen from '../Screens/Organization/Organization';
import CreateOrg from '../Screens/Organization/CreateOrg';
import ContactScreen from '../Screens/Contacts/Contact';
import CreateContact from '../Screens/Contacts/CreateCntct';

const Stack = createNativeStackNavigator();

const DealNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DealScreen"
        component={DealScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateDeal"
        component={CreateDeal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const OrgNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrganizationScreen"
        component={OrganizationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateOrg"
        component={CreateOrg}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ContactNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateContact"
        component={CreateContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {DealNav, OrgNav, ContactNav};
