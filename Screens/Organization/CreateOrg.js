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

const CreateOrg = () => {
  const nav = useNavigation();

  const onSavePressed = () => {
    // console.warn('Save');
    //navigate to Organization Screen
    nav.navigate('OrganizationScreen');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 34,
            padding: 10,
            color: 'dodgerblue',
            textDecorationStyle: 'solid',
          }}>
          Add Info
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          Organization Name*
        </Text>
        <TextInput style={styles.input} placeholder="Enter Organization Name" />
        <Text
          style={{
            fontSize: 20,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          Website Link
        </Text>
        <TextInput style={styles.input} placeholder="Enter Website Link" />
        <Text
          style={{
            fontSize: 20,
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
            fontSize: 20,
            color: 'dodgerblue',
            fontStyle: 'italic',
            fontFamily: 'Avenir',
            color: colors.secondary,
          }}>
          Contact Number
        </Text>
        <TextInput style={styles.input} placeholder="Enter Contact Number" />
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
export default CreateOrg;
