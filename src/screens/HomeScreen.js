import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { products } from '../data/products';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => {
        if (item.id === 'user_01') {
          navigation.navigate('Perfil');
        } else {
          navigation.navigate('ProductDetail', { product: item });
        }
      }}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productRole}>{item.role}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    juastifyContent: 'center',
    backgroundColor: '#EBEBEB',
  },
  productContainer: {
    flex: 1,
    margin: 4,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 650
  },
  productImage: {
    width: 120,
    height: 120,
    // resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 8,
  },
  productRole: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
  },
});

export default HomeScreen;