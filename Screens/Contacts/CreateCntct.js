import React from 'react';
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
import colors from '../../config/colors';

const CreateContact = () => {
  const nav = useNavigation();

  const onSavePressed = () => {
    // console.warn('Save');
    //navigate to Deal Screen
    nav.navigate('ContactScreen');
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
          style={{
            fontSize: 15,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          Contact Name*
        </Text>
        <TextInput style={styles.input} placeholder="Enter Contact Name" />
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
          Enter Email
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
    borderColor: ' dodgerblue',
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
export default CreateContact;
