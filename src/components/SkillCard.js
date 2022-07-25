import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

export function SkillCard({ data, styleList }) {
  return (
    <FlatList
      style={styleList}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <Text style={styles.skillsListText}>{item}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  skillsListText: {
    backgroundColor: '#1f1e2a',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
});
