import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomInput from '../../CustomComponents/CustomInput';
import SocialSigninBtn from '../../CustomComponents/SocialSigninBtn';
// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import imagePath from '../../Constants/imagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// let STORAGE_KEY = '@user_input';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();
  const value = {
    email: 'salma@test.com',
    password: 'pass123456',
  };
  //function which is responsible for login
  const onLoginPressed = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(value));
      nav.navigate('BottomTab');
    } catch (error) {
      alert('incorrect password and email');
      console.log(error);
    }
  };
  // console.warn('Sign In');
  //validate user
  // nav.navigate('NavigationAuth');

  const onForgotPasswordPressed = () => {
    // console.warn('Forgot password');
    //on forgot password screen
    nav.navigate('ForgotPassword');
  };

  const {height} = useWindowDimensions();

  const onSingupPressed = async () => {
    // console.warn('signup');
    //if don't have account
    nav.navigate('CreateAccount');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        {/* <Image
          source={Logo}
          style={[StyleSheet.Logo, {height: height * 0.3}]}
          resizeMode="center"
        /> */}

        <Text
          style={{
            fontSize: 60,
            color: 'dodgerblue',
            fontWeight: 'italic',
          }}>
          LS
        </Text>
        {/* tahoma, verdana, arial, */}
        <Text style={{fontSize: 20, color: '#444'}}>CRM</Text>

        <CustomInput
          style={{flex: 1, padding: 16}}
          placeholder="Email"
          autoCapitalize="none"
          keyboardtype="email-address"
          autoCorrect={false}
          value={email}
          setValue={setEmail}
          icon={'email'}
        />

        <CustomInput
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          icon={'lock'}
          textContentType="password"
        />
        <CustomButton text="Sign In" onPress={onLoginPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        {/* <SocialSigninBtn /> */}

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSingupPressed}
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
  Logo: {
    width: ' 70%',
    maxheight: 200,
    maxWidth: 300,
  },
  Text: {
    width: ' 70%',
    maxheight: 200,
    maxWidth: 300,
  },
});
export default LoginScreen;
