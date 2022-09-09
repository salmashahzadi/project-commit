import React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const ChangePassword = ({props}) => {
  return (
    <View style={{flex: 1}}>
      <Text>ChangePassword</Text>
      {/* <Button onPress={() => props.goBack()} title="Go back home" /> */}
    </View>
  );
};
export default ChangePassword;
