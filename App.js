import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import FinalNavigation from './Navigation/FinalNavigation';
// import BottomTab from './Navigation/BottomTab';
// import Menue from './Screens/Home/Menue';

export default function App() {
  // const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.root}>
      {/* <BottomTab /> */}
      {/* <Menue /> */}
      {/* <Text>Hello</Text> */}
      <FinalNavigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
