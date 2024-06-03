import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Discounts = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>POR TIEMPO LIMITADO 🔥</Text>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://ss261.liverpool.com.mx/xl/1139059259.jpg' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Camisa Tommy Hilfiger</Text>
        <Text style={styles.productDescrip}>Salmón</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>$1,299</Text>
          <Text style={styles.originalPrice}>$1,699</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://cdn.mall.adeptmind.ai/https%3A%2F%2Fss251.liverpool.com.mx%2Fxl%2F1123044899_2p.jpg_large.webp' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Pantalón American Eagle Baby Blue</Text>
        <Text style={styles.productDescrip}>Azul claro liso</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>$999</Text>
          <Text style={styles.originalPrice}>$1,299</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://cdn-images.farfetch-contents.com/16/01/91/18/16019118_30375906_1000.jpg' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Cinturón Salvatore Ferragamo</Text>
        <Text style={styles.productDescrip}>Negro con hebilla dorada</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>$5,678</Text>
          <Text style={styles.originalPrice}>$6,115</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  productDescrip: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice: {
    fontSize: 16,
    color: '#000',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'line-through',
  },
});

export default Discounts;
