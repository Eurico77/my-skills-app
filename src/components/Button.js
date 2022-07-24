import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({ onPress, children }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370f7',
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f1f1f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
