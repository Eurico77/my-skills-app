import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SkillCard } from '../components/SkillCard';
import { Title } from '../components/Title';

export interface SkillData {
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);

  useEffect(() => {
    setNewSkill('');
  }, [skills]);

  const handleAddSkill = () => {
    const data = { name: newSkill };
    setSkills(prevSkills => [...prevSkills, data]);
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(prevSkills => prevSkills.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Title>Welcome Eurico</Title>
      <Input onChangeText={setNewSkill} placeholder="What's your new skill?" />
      <Button onPress={handleAddSkill} title="Add skill" />
      <Text style={[styles.text, { marginTop: 50 }]}>My Skills</Text>
      <FlatList
        data={skills}
        renderItem={({ item, index }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(index)}
          />
        )}
        keyExtractor={item => item.name}
        style={styles.skillsList}
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
  skillsList: {
    marginTop: 20,
  },
});
