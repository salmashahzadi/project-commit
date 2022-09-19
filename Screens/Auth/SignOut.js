import React, {useContext} from 'react';
import {ScrollView, StatusBar, View, Text, Button} from 'react-native';
import {AuthContext} from '../../Navigation/AuthProvider';

export default function SignOut() {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>SignOut</Text>
      <Button onPress={() => logout()} title="Logout" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
