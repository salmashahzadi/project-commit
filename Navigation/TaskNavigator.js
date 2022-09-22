import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDo from '../Screens/ToDoApp/ToDo';

const Stack = createNativeStackNavigator();

export default function TaskNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Task"
        component={ToDo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
