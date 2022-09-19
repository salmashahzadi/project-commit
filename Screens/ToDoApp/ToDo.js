import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskInput from './Components/TaskInput';
import TaskItem from './Components/TaskItem';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Task</Text>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
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
    backgroundColor: 'lightpink',
  },
  heading: {
    color: 'purple',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: 'lucida grande',
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
