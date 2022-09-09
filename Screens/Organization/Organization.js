import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../CustomComponents/CustomButton';

const OrganizationScreen = () => {
  const persons = [
    {
      id: '1',
      orgname: 'Earnest Green',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '2',
      orgname: 'Winston Orn',
      contactnum: '349232374',
      email: 'kjsakh@email.com',
    },
    {
      id: '3',
      orgname: 'Carlton Collins',
      contactnum: '3493493474',
      email: 'ah232@email.com',
    },
    {
      id: '4',
      orgname: 'Malcolm Labadie',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '5',
      orgname: 'Michelle Dare',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '6',
      orgname: 'Carlton Zieme',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '7',
      orgname: 'Jessie Dickinson',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '8',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '9',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '10',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },

    {
      id: '11',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '12',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '13',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '14',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '15',
      orgname: 'Ika motors',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
  ];
  const nav = useNavigation();
  const onDealPressed = () => {
    console.warn('Add Organization');
    //add deals
    nav.navigate('CreateOrg');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomButton text="Add New Organization" onPress={onDealPressed} />
        {persons.map(person => {
          return (
            <View>
              <Text style={styles.item}>
                {person.dealname} {person.contactnum} {person.email}{' '}
                {person.orgname}{' '}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
export default OrganizationScreen;
