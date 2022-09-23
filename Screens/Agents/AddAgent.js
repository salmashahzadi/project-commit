import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import CustomInput from '../../CustomComponents/CustomInput';
import {useState, useEffect} from 'react';
import CustomButton from '../../CustomComponents/CustomButton';

const AddAgent = props => {
  const onAddAgent = () => {
    // nav.navigate('CreateAccount');
  };
  const [email, setEmail] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CustomInput
        autoCapitalize="none"
        keyboardtype="email-address"
        value={email}
        onChangeText={setEmail}
        placeholder={'Enter Email'}
      />
      <CustomButton text="Add Agent" onPress={onAddAgent} />
    </View>
  );
};
export default AddAgent;
