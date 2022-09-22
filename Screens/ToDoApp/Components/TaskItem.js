import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../../config/colors';

export default TaskItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.task}>{props.task}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => props.completeTask()}>
            <AntDesign
              style={styles.complete}
              name="checksquare"
              size={18}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.deleteTask()}>
            <MaterialCommunityIcons
              style={styles.delete}
              name="delete"
              size={18}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  indexContainer: {
    backgroundColor: colors.mypri,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: colors.pri2,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: colors.light,
    width: '90%',
    fontSize: 16,
  },
  delete: {},
  complete: {
    marginRight: 10,
  },
});
