import React from 'react';
import {useState} from 'react';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import SocialSigninBtn from '../../CustomComponents/SocialSigninBtn';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const nav = useNavigation();

  const onSubmitPressed = () => {
    // console.warn('Confirm code');
    //go to reset password
    nav.navigate('ResetPassword');
  };
  const onSinginPressed = () => {
    // console.warn('Sign In');
    //sign in screen
    nav.navigate('LoginScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Text style={style.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
          secureTextEntry
        />
        <CustomInput
          placeholder="Enter new password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry
          icon={'lock'}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSinginPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'gray',
    margin: 10,
  },
  link: {
    color: '#FDB075',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 10,
  },
});
export default ResetPassword;
