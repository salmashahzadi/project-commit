import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../../config/colors';
import AppText from '../../CustomComponents/AppText';
import TaskInput from './Components/TaskInput';
import TaskItem from './Components/TaskItem';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [style, setStyle] = useState('');
  const addTask = task => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const changestyle = () => {
    console.log('you just clicked');
    setStyle('const2');
  };
  const completeTask = completeIndex => {
    setStyle('const2');
    setTasks(tasks.filter((value, index) => index === completeIndex));
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <AppText numberOfLines={1} style={styles.heading}>
        Add Task
      </AppText>
      {/* <Text style={styles.heading}>Add Task</Text> */}
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
                completeTask={() => completeTask(index)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInput addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    color: colors.pri2,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: '',
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  const2: {
    textDecorationStyle: 'solid',
    textDecoration: 'line-through',
  },
});
