import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import projects from '../data/projects';

const ProjectItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.tech}>{item.tech} • {item.status}</Text>
    {item.description ? <Text style={styles.desc}>{item.description}</Text> : null}
  </View>
);

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
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
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  tech: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: '#333',
  }
});

export default CartScreen;
