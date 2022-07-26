import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...props }: SkillCardProps) {
  return (
    <TouchableOpacity {...props} style={styles.skillsListText}>
      <Text style={styles.skillsListText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillsListText: {
    backgroundColor: '#1f1e2a',
    fontSize: 16,
    borderRadius: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    color: 'white',
    marginTop: 10,
    alignItems: 'center',
  },
});
