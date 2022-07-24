import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {Title} from '../components/Title';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => setSkills(oldState => [...oldState, newSkill]);

  return (
    <View style={styles.container}>
      <Title>Welcome Eurico</Title>
      <Input
        onChangeText={text => setNewSkill(text)}
        placeholder="What's your new skill?"
      />
      <Button onPress={handleAddSkill}>Adding</Button>
      <Text style={[styles.text, {marginTop: 50}]}>My Skills</Text>
      <FlatList
        style={styles.list}
        data={skills}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Text style={styles.skillsListText}>{item}</Text>
        )}
      />
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
    borderRadius: 50,
  },
});
