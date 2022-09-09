import * as React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import BottomTab from '../../Navigation/BottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MyDrawer from '../../Navigation/Drawer';

const Stack = createNativeStackNavigator();
const Menue = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Bottom Tab"
    //     component={BottomTab}
    //     options={{headerShown: false}}
    //   />
    // </Stack.Navigator>
    <View>
      <Text>Hey there welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Menue;
//const nav = useNavigation() //use this hook if we want to navigate some
//<TouchableOpacity onPress=()=>nav.navigate() />
