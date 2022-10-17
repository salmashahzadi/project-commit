import React, {useContext} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthContext} from '../../Navigation/AuthProvider';
import AppButton from '../../CustomComponents/AppButton';
// let STORAGE_KEY = '@user_input';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [create, setCreate] = useState(false);
  const nav = useNavigation();

  // const {login} = useContext(AuthContext);

  const value = {
    email: 'salma@test.com',
    password: 'pass123456',
  };
  //function which is responsible for login
  const onLoginPressed = async () => {
    //   try {
    //     await AsyncStorage.setItem('user', JSON.stringify(value));
    //     nav.navigate('BottomTab');
    //   } catch (error) {
    //     alert('incorrect password and email');
    //     console.log(error);
    //   }
    // };
    // console.warn('Sign In');
    //validate user
    nav.navigate('BottomTab');
  };
  const onForgotPasswordPressed = () => {
    // console.warn('Forgot password');
    //on forgot password screen
    nav.navigate('ForgotPassword');
  };

  const {height} = useWindowDimensions();

  const onSingupPressed = () => {
    // console.warn('signup');
    //if don't have account
    nav.navigate('CreateAccount');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Image
          source={require('../../Assets/Images/Logo1.png')}
          style={[StyleSheet.Logo, {height: height * 0.3}]}
          resizeMode="center"
        />

        <CustomInput
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

        <CustomButton
          text="Sign In"
          onPress={onLoginPressed}
          // onPress={() => login(email, password)}
        />
        {/* <AppButton text="Sign In"
          onPress={onLoginPressed}/> */}

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
