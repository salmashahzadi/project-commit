import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import FinalNavigation from './Navigation/FinalNavigation';
import ToDo from './Screens/ToDoApp/ToDo';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ToDo />
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
