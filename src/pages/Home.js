import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Welcome Eurico</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.text, {marginTop: 50}]}>My Skills</Text>
      <View style={styles.skillsList}>
        <Text style={styles.skillsListText}>React Native</Text>
        <Text style={styles.skillsListText}>ReactJS</Text>
        <Text style={styles.skillsListText}>JavaScript</Text>
        <Text style={styles.skillsListText}>NodeJS</Text>
        <Text style={styles.skillsListText}>PHP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    marginTop: 30,
    color: '#fff',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skillsList: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillsListText: {
    backgroundColor: '#1f1e25',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
});
