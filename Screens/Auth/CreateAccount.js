import React, {useContext} from 'react';
import {useState} from 'react';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import SocialSigninBtn from '../../CustomComponents/SocialSigninBtn';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../Navigation/AuthProvider';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
const CreateAccount = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  const handleSubmit = () => {
    //   if (!email) {
    //     setError('Email required *');
    //     setValid(false);
    //     return;
    //   } else if (!password && password.trim() && password.length > 6) {
    //     setError('Weak password, minimum 5 chars');
    //     setValid(false);
    //     return;
    //   } else if (!__isValidEmail(email)) {
    //     setError('Invalid Email');
    //     setValid(false);
    //     return;
    //   }
    //   __doCreateUser(email, password);
    // };
    // const __doCreateUser = async (email, password) => {
    //   try {
    //     let response = await auth().createUserWithEmailAndPassword(
    //       email,
    //       password,
    //     );
    //     if (response) {
    //       console.log(tag, '?', response);
    //     }
    //   } catch (e) {
    //     console.error(e.message);
    //   }
  };

  const nav = useNavigation();
  // const onRegisterPressed = () => {
  //   //   // console.warn('Sign up');
  //   //   //confirm email
  //   nav.navigate('LoginScreen');
  // };
  const onForgotPasswordPressed = () => {
    // console.warn('Forgot password');
    //move to reset password
    nav.navigate('ResetPassword');
  };
  const onTermsOfUsePressed = () => {
    console.warn('Terms&Conditions');
  };
  const onPrivacyPressed = () => {
    console.warn('Privacy');
  };
  const onSinginPressed = () => {
    // console.warn('Sign In');
    //back to login
    nav.navigate('LoginScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Text style={style.title}>Create an account</Text>
        {/* <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setUsername}
          icon="account"
        /> */}
        <CustomInput
          placeholder="Email"
          // value={email}
          // onChangeText={userEmail => setEmail(userEmail)}
          setValue={emailRef}
          icon={'email'}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <CustomInput
          placeholder="Password"
          // value={password}
          // onChangeText={userPassword => setPassword(userPassword)}
          setValue={passwordRef}
          secureTextEntry={true}
          icon={'lock'}
        />
        <CustomInput
          placeholder="Re-enter Password"
          // value={passwordRepeat}
          // onChangeText={userPassword => setPassword(userPassword)}
          setValue={passwordConfirmRef}
          secureTextEntry={true}
          icon={'lock'}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit}
          // onPress={() => register(email, password)}
        />

        {/* <Text style={style.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={style.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and {``}
          <Text style={style.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
          
        </Text> */}
        {/* <SocialSigninBtn /> */}
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSinginPressed}
          type="TERTIARY"
        />

        {/* <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        /> */}
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
    color: 'grey',
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
export default CreateAccount;
