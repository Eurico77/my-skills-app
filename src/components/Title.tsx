import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  children: string;
}

export function Title({ children }: Props) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
