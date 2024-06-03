import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Shirts = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Playeras en tendencia 🔥</Text>
      <View style={styles.productContainer}>
        <Image source={{ uri: 'https://m.media-amazon.com/images/I/21yxG88vpRL._AC_.jpg' }} style={styles.productImage} />
        <Text style={styles.productName}>Playera BOSS</Text>
        <Text style={styles.productDescrip}>Blanca con letras rojo y azul</Text>
        <Text style={styles.productPrice}>$2,600</Text>
      </View>
      <View style={styles.productContainer}>
        <Image source={{ uri: 'https://premboutiq.com.mx/cdn/shop/files/D_952053-MLM53551824101_012023-B.jpg?v=1715982139' }} style={styles.productImage} />
        <Text style={styles.productName}>Playera HUGO</Text>
        <Text style={styles.productDescrip}>Negra con letras blancas</Text>
        <Text style={styles.productPrice}>$2,500</Text>
      </View>
      <View style={styles.productContainer}>
        <Image source={{ uri: 'https://m.media-amazon.com/images/I/41TZ6x7WiSL._AC_.jpg' }} style={styles.productImage} />
        <Text style={styles.productName}>Playera Psycho Bunny</Text>
        <Text style={styles.productDescrip}>Azul con logo</Text>
        <Text style={styles.productPrice}>$3,100</Text>
      </View>
      <View style={styles.productContainer}>
        <Image source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_651029-MLM71157518649_082023-O.webp' }} style={styles.productImage} />
        <Text style={styles.productName}>Playera Palm Angels</Text>
        <Text style={styles.productDescrip}>Negra con letras blancas y detalle verde</Text>
        <Text style={styles.productPrice}>$3,600</Text>
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
  productPrice: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});

export default Shirts;
