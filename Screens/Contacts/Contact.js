import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../CustomComponents/CustomButton';
import colors from '../../config/colors';

const ContactScreen = () => {
  const persons = [
    {
      id: '1',
      contactname: 'Fatima Zia',
      contactnum: '3493493474',
      email: 'fatima@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '2',
      contactname: 'Sana Siddique',
      contactnum: '349232374',
      email: 'sana@email.com',
      orgname: 'maya & max',
    },
    {
      id: '3',
      contactname: 'Salma Shahzadi',
      contactnum: '3493493474',
      email: 'salma@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '4',
      dealname: 'Malcolm Labadie',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '5',
      dealname: 'Michelle Dare',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '6',
      dealname: 'Carlton Zieme',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '7',
      dealname: 'Jessie Dickinson',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '8',
      dealname: 'Julian Gulgowski',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '9',
      contactname: 'Ellen Veum',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '10',
      contactname: 'Lorena Rice',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },

    {
      id: '11',
      contactname: 'Carlton Zieme',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '12',
      contactname: 'Jessie Dickinson',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '13',
      contactname: 'Julian Gulgowski',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '14',
      contactname: 'Ellen Veum',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '15',
      contactname: 'Lorena Rice',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
  ];
  const nav = useNavigation();
  const onContactPressed = () => {
    // console.warn('Add Contact');
    //add deals
    nav.navigate('CreateContact');
  };
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <CustomButton text="Add New Contact" onPress={onContactPressed} />
      <FlatList
        style={{padding: 15}}
        data={persons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={person => {
          return (
            <View style={styles.listItem}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 20,
                }}>
                {person.item.contactname} {'\n'}
                {person.item.contactnum} {'\n'}
                {person.item.email}
                {'\n'}
                {person.item.orgname} {'\n'}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 50,
    padding: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  item: {
    // padding: 20,
    fontSize: 15,
    // marginTop: 5,
  },
  listItem: {
    backgroundColor: colors.secondary,
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    // borderWidth: 1,
    // borderColor: colors.hotpink,
  },
});
export default ContactScreen;
