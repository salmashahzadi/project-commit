import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import colors from '../../config/colors';
import {Avatar, Card, Button, Title, Paragraph} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const Menue = () => {
  const LeftContent = props => <Avatar.Icon {...props} icon="contacts" />;
  const RightContent = props => <Avatar.Icon {...props} icon="folder" />;

  useEffect(() => {
    firestore()
      .collection('Users')
      .add({
        name: 'Adil ',
        age: 12,
      })
      .then(() => {
        console.log('User added!');
      });
  }, []);

  return (
    <View>
      <Text
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: colors.light,
          fontSize: 30,
          fontWeight: 'bold',
          alignSelf: 'center',
          fontStyle: 'normal',
          color: colors.pri2,
        }}>
        Dashboard
      </Text>
      <Text></Text>
      <Card>
        <Card.Title
          title="Contacts(120)"
          subtitle="Contacts created in selected  date range"
          left={LeftContent}
        />
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            fontWeight: 'bold',
            alignItems: 'center',
            color: colors.secondary,
          }}>
          13 new contacts
        </Text>
        {/* <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        <Card.Actions>
          <Button>⬆</Button>
          <Button>⬆</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title
          title="Deals(121)"
          subtitle="Deals created in selected date range"
          left={RightContent}
        />
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            fontWeight: 'bold',
            alignItems: 'center',
            color: colors.secondary,
          }}>
          13 new deals
        </Text>
        {/* <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        <Card.Actions>
          <Button>⬆</Button>
          <Button>⬆</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 15,
    marginTop: 11,
    width: 150,
    height: 300,
  },
  listItem: {
    backgroundColor: colors.danger,
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    // borderWidth: 1,
    // borderColor: colors.hotpink,
  },
});

export default Menue;
//const nav = useNavigation() //use this hook if we want to navigate some
//<TouchableOpacity onPress=()=>nav.navigate() />
