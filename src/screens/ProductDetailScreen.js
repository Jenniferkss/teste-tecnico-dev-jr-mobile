import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productRole}>{product.role}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Contato</Text>
        </TouchableOpacity>

        <Text style={styles.descriptionTitle}>Sobre</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    padding: 15,
  },
  productName: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 10,
  },
  productRole: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 32,
    color: '#333333',
    fontWeight: 'normal',
  },
  productInstallments: {
    fontSize: 16,
    color: '#8a00a6',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#775a83',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartButton: {
    backgroundColor: 'rgba(52, 131, 250, 0.1)',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  cartButtonText: {
    color: '#6f5492',
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    color: '#333333',
    marginTop: 10,
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
  },
});

export default ProductDetailScreen;