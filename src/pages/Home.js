import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SkillCard } from '../components/SkillCard';
import { Title } from '../components/Title';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => setSkills(oldState => [...oldState, newSkill]);

  return (
    <View style={styles.container}>
      <Title>Welcome Eurico</Title>
      <Input onChangeText={setNewSkill} placeholder="What's your new skill?" />
      <Button onPress={handleAddSkill}>Adding</Button>
      <Text style={[styles.text, { marginTop: 50 }]}>My Skills</Text>
      <SkillCard data={skills} styleList={styles.skillsList} />
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
});
