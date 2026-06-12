import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import skills from '../data/skills';

const SkillItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.level}>{item.level}</Text>
    {item.description ? <Text style={styles.desc}>{item.description}</Text> : null}
  </View>
);

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  level: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: '#333',
  },
});

export default FavoritesScreen;