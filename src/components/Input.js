import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function Input({ onChangeText, placeholder }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#555"
      onChangeText={onChangeText}
      autoCompleteType="true"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    marginTop: 30,
    color: '#fff',
    paddingHorizontal: 20,
  },
});
