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

const OrganizationScreen = () => {
  const persons = [
    {
      id: '1',
      orgname: 'Sana Siddique',
      website: 'www.sanaenterprise.com',
      contactnum: '3493493474',
      email: 'sana@email.com',
    },
    {
      id: '2',
      orgname: 'Salma Shahzadi',
      website: 'www.ssmtraders.com',
      contactnum: '349232374',
      email: 'salma@email.com',
    },
    {
      id: '3',
      orgname: 'Fatima Zia',
      website: 'www.fcpeducation.com',
      contactnum: '3493493474',
      email: 'fatima@email.com',
    },
    {
      id: '4',
      orgname: 'Malcolm Labadie',
      website: 'www.sanaenterprise.com',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
    },
    {
      id: '5',
      orgname: 'Michelle Dare',
      website: 'www.sanaenterprise.com',
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
    // console.warn('Add Organization');
    //add deals
    nav.navigate('CreateOrg');
  };
  return (
    <View style={styles.container}>
      <CustomButton text="Add New Organization" onPress={onDealPressed} />
      <FlatList
        style={{padding: 25}}
        data={persons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={person => {
          return (
            <View style={styles.listItem}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 18,
                }}>
                {person.item.orgname} {'\n'}
                {person.item.website} {'\n'}
                {person.item.contactnum} {'\n'}
                {person.item.email}
                {'\n'}
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
export default OrganizationScreen;
