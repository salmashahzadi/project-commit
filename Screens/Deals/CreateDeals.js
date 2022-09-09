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

const CreateDeal = () => {
  const nav = useNavigation();

  const onSavePressed = () => {
    console.warn('Save');
    //navigate to Deal Screen
    nav.navigate('DealScreen');
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
        <Text style={{fontSize: 20, color: 'dodgerblue'}}>Deal Name*</Text>
        <TextInput style={styles.input} placeholder="Enter Deal Name" />
        <Text style={{fontSize: 20, color: 'dodgerblue'}}>Contact Number*</Text>
        <TextInput style={styles.input} placeholder="Enter Contact Number" />
        <Text style={{fontSize: 20, color: 'dodgerblue'}}> Enter Email*</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
        <Text style={{fontSize: 20, color: 'dodgerblue'}}>
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
    borderColor: 'dodgerblue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 10,
  },
});
export default CreateDeal;
