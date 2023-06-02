import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from './components/Task';
import AddTask from './components/AddTask';

export default function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const handleAddTask = async (task) => {
    if(task.text === '') return;
    const newTasks = [...taskItems, task];
    setTaskItems(newTasks);
    await AsyncStorage.setItem('taskItems', JSON.stringify(newTasks));
  };

  useEffect(() => {
    const getStoredTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('taskItems');
      if(storedTasks) setTaskItems(JSON.parse(storedTasks));
    };
    getStoredTasks();
  }, []);

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleCompleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTaskItems(itemsCopy);
  };

  const handleToggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  }

  return (
    <View style={styles.container}>
      <Button title={showCompleted ? "Hide Completed" : "Show Completed"} onPress={handleToggleShowCompleted}/>
      <ScrollView style={styles.scrollContainer}>
        {taskItems.filter(task => showCompleted || !task.completed).map((task, index) => (
          <Task key={index} task={task} index={index} handleDelete={handleDeleteTask} handleComplete={handleCompleteTask} />
        ))}
      </ScrollView>
      <AddTask handleAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  scrollContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
