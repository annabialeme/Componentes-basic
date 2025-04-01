import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
