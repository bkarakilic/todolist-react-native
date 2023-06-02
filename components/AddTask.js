import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const AddTask = ({ handleAddTask }) => {
  const [task, setTask] = useState({ text: '', completed: false });

  const handleAdd = () => {
    handleAddTask(task);
    setTask({ text: '', completed: false });
  };

  return (
    <View style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={'Write a task'} value={task.text} onChangeText={text => setTask({ text, completed: false })} />
      <TouchableOpacity onPress={handleAdd}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  writeTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    padding: 15,
    backgroundColor: '#E8EAED',
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '100%',
  },
  addWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 35,
    color: '#C0C0C0',
  },
});

export default AddTask;
