import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Jeans = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Los mejores jeans 🔥</Text>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://media.gq.com.mx/photos/606e2efddb99f6a0134fd39f/master/w_1600%2Cc_limit/H1-BTN.jpg' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Pantalón American Eagle Black</Text>
        <Text style={styles.productDescrip}>Full negro rasgado</Text>
        <Text style={styles.productPrice}>$1,699</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://media.gq.com.mx/photos/606e2eed7354cb9b1c9e2c39/master/w_1600%2Cc_limit/H2-BTN.jpg' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Pantalón American Eagle Blue</Text>
        <Text style={styles.productDescrip}>Azul rasgado</Text>
        <Text style={styles.productPrice}>$1,299</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_692281-MLM50596759202_072022-O.webp' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Pantalón American Eagle Blue Navy</Text>
        <Text style={styles.productDescrip}>Azul marino con rasgado</Text>
        <Text style={styles.productPrice}>$1,599</Text>
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
    height: 400,
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

export default Jeans;
