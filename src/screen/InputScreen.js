import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const InputScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite algo..."
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Botão Simples"
        onPress={() => alert('Texto digitado: ' + text)}
      />
      <CustomButton
        title="Botão Personalizável"
        onPress={() => alert('Texto personalizado: ' + text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default InputScreen;
