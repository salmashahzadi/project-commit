import React from 'react';
import {useState} from 'react';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import SocialSigninBtn from '../../CustomComponents/SocialSigninBtn';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const nav = useNavigation();

  const onSendPressed = () => {
    console.warn('Confirm code');
    //reset password
    nav.navigate('ResetPassword');
  };
  const onSinginPressed = () => {
    console.warn('Sign In');
    //sign in
    nav.navigate('Login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Text style={style.title}>Reset your Password</Text>
        <CustomInput
          placeholder="User name"
          value={username}
          setValue={setUsername}
          secureTextEntry
        />
        <CustomButton text="Send" onPress={onSendPressed} />

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
export default ForgotPassword;
