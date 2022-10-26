import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../CustomComponents/AppText';
import colors from '../../config/colors';
// import {doc, setDoc} from 'firebase/firestore';
// import {db} from '../../firebase/config';

const CreateDeal = () => {
  const [deal, setDeal] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const nav = useNavigation();

  // function create() {
  //   setDoc(doc(db, 'deals', 'id'), {
  //     deal: deal,
  //     contact: contact,
  //     email: email,
  //     org: org,
  //   })
  //     .then(() => {
  //       console.log('data submitted');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  const onSavePressed = () => {
    // console.warn('Save');
    //navigate to Deal Screen
    nav.navigate('DealScreen');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            padding: 10,
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
            textDecorationStyle: 'solid',
          }}>
          Add Info
        </Text>
        <Text
          value={deal}
          onChangeText={deal => {
            setDeal(deal);
          }}
          style={{
            fontSize: 15,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          Deal Name*
        </Text>
        <TextInput style={styles.input} placeholder="Enter Deal Name" />
        <Text
          style={{
            fontSize: 15,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          Contact Number*
        </Text>
        <TextInput style={styles.input} placeholder="Enter Contact Number" />
        <Text
          style={{
            fontSize: 15,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          {' '}
          Enter Email*
        </Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
        <Text
          style={{
            fontSize: 15,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          Organization Name
        </Text>
        <TextInput style={styles.input} placeholder="Enter Organization Name" />
        <CustomButton text="Save" onPress={onSavePressed} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.medium,
    width: '100%',
    padding: 30,
  },
  input: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 10,
    fontStyle: 'italic',
    fontFamily: 'Avenir',
    color: colors.secondary,
  },
});
export default CreateDeal;
