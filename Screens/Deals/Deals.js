import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../CustomComponents/CustomButton';

// import {HeaderTitle} from 'react-navigation-stack';

const DealScreen = () => {
  const persons = [
    {
      id: '1',
      dealname: 'Earnest Green',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '2',
      dealname: 'Winston Orn',
      contactnum: '349232374',
      email: 'kjsakh@email.com',
      orgname: 'maya & max',
    },
    {
      id: '3',
      dealname: 'Carlton Collins',
      contactnum: '3493493474',
      email: 'ah232@email.com',
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
      dealname: 'Ellen Veum',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '10',
      dealname: 'Lorena Rice',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },

    {
      id: '11',
      dealname: 'Carlton Zieme',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '12',
      dealname: 'Jessie Dickinson',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '13',
      dealname: 'Julian Gulgowski',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '14',
      dealname: 'Ellen Veum',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '15',
      dealname: 'Lorena Rice',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
  ];
  const nav = useNavigation();
  const onDealPressed = () => {
    // console.warn('Add Deal');
    //add deals
    nav.navigate('CreateDeal');
  };
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      <CustomButton text="Add New Deal" onPress={onDealPressed} />
      <FlatList
        data={persons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={person => {
          return (
            <View style={styles.listItem}>
              <Text>
                {person.item.dealname} {'\n'}
                {person.item.contactnum} {'\n'}
                {person.item.email}
                {'\n'}
                {person.item.orgname}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    fontSize: 15,
  },
  listItem: {
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: '#333',
    padding: 25,
  },
});
export default DealScreen;
