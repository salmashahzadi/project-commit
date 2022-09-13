// import React from 'react';
// import {useState} from 'react';
// import CustomInput from '../../CustomComponents/CustomInput';
// import CustomButton from '../../CustomComponents/CustomButton';
// import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
// import SocialSigninBtn from '../../CustomComponents/SocialSigninBtn';
// import {useNavigation} from '@react-navigation/native';

// const ConfirmEmail = () => {
//   const [code, setCode] = useState('');
//   const nav = useNavigation();

//   const onConfirmPressed = () => {
//     console.warn('Confirm code');
//     //to menue screem
//     nav.navigate('Home');
//   };
//   const onSinginPressed = () => {
//     console.warn('Sign In');
//     //go to login
//     nav.navigate('Login');
//   };
//   const onResendCodePressed = () => {
//     console.warn('Resend code');
//   };

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={style.root}>
//         <Text style={style.title}>Confirm your email</Text>
//         <CustomInput
//           placeholder="Enter your confirmation code"
//           value={code}
//           setValue={setCode}
//           secureTextEntry
//         />
//         <CustomButton text="Confirm" onPress={onConfirmPressed} />
//         <CustomButton
//           text="Resend Code"
//           onPress={onResendCodePressed}
//           type="SECONDARY"
//         />
//         <CustomButton
//           text="Back to Sign in"
//           onPress={onSinginPressed}
//           type="TERTIARY"
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const style = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   text: {
//     color: 'gray',
//     margin: 10,
//   },
//   link: {
//     color: '#FDB075',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#051C60',
//     marginVertical: 10,
//   },
// });
// export default ConfirmEmail;
