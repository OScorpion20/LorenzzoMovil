import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Sneakers = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lo último en sneakers 🔥</Text>
      <View style={styles.productContainer}>
        <Image source={{ uri: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1611777406' }} style={styles.productImage} />
        <Text style={styles.productName}>Air Jordan 1 University Blue</Text>
        <Text style={styles.productDescrip}>Gamuza azul</Text>
        <Text style={styles.productPrice}>$5,880</Text>
      </View>
      <View style={styles.productContainer}>
        <Image source={{ uri: 'https://images.stockx.com/360/Air-Jordan-1-Retro-High-Dark-Mocha/Images/Air-Jordan-1-Retro-High-Dark-Mocha/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1635345732&h=320&q=60' }} style={styles.productImage} />
        <Text style={styles.productName}>Air Jordan 1 Mocha</Text>
        <Text style={styles.productDescrip}>Gamuza café</Text>
        <Text style={styles.productPrice}>$8,780</Text>
      </View>
      <View style={styles.productContainer}>
        <Image source={{ uri: 'https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606315877' }} style={styles.productImage} />
        <Text style={styles.productName}>Air Jordan 4 Black Cat</Text>
        <Text style={styles.productDescrip}>Gamuza negra</Text>
        <Text style={styles.productPrice}>$16,550</Text>
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
    height: 200,
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
  productPrice: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});

export default Sneakers;
