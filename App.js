import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import FinalNavigation from './Navigation/FinalNavigation';
import ToDo from './Screens/ToDoApp/ToDo';
import MyDrawer from './Navigation/Drawer';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <MyDrawer />
      {/* <ToDo /> */}
      {/* <FinalNavigation /> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
