import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = ({ task, index, handleDelete, handleComplete }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handleComplete(index)}>
        <View style={task.completed ? styles.completeCircle : styles.circle} />
      </TouchableOpacity>
      <Text style={task.completed ? styles.completedText : styles.itemText}>{task.text}</Text>
      <TouchableOpacity onPress={() => handleDelete(index)}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
  },
  completedText: {
    maxWidth: '80%',
    textDecorationLine: 'line-through',
    color: 'green',
  },
  deleteText: {
    color: 'red',
  },
  circle: {
    width: 24,
    height: 24,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  completeCircle: {
    width: 24,
    height: 24,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#55BCF6',
  },
});

export default Task;
