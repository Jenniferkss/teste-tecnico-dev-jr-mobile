import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { products } from '../data/products';
import skills from '../data/skills';
import projects from '../data/projects';

const ProfileScreen = () => {
  const user = products[0];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image source={user.image} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.role}>{user.role}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Sobre</Text>
      <Text style={styles.bio}>{user.description}</Text>

      <Text style={styles.sectionTitle}>Contato</Text>
      <Text style={styles.contact}>Email: juliana.silva@gmail.com</Text>
      <Text style={styles.contact}>Local: Valinhos, Brasil</Text>

      <Text style={styles.sectionTitle}>Habilidades</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.chip}>
            <Text style={styles.chipText}>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      />

      <Text style={styles.sectionTitle}>Projetos</Text>
      {projects.map((p) => (
        <View key={p.id} style={styles.projectCard}>
          <Text style={styles.projectTitle}>{p.title}</Text>
          <Text style={styles.projectMeta}>{p.tech} • {p.status}</Text>
          <Text style={styles.projectDesc}>{p.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },
  headerText: {
    marginLeft: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  role: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  bio: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  contact: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  chip: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  chipText: {
    fontSize: 13,
    color: '#333',
  },
  projectCard: {
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  projectMeta: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  projectDesc: {
    fontSize: 13,
    color: '#333',
  },
});

export default ProfileScreen;