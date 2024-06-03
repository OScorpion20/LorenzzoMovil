import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Kids = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tu campeón merece lo mejor 🔥</Text>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://mcaps.com.mx/cdn/shop/files/MOD11_44d1f5c0-1e7f-4bff-a052-dc64f8dde25d.jpg?v=1694263207' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Gorra Goorin Bros Stallion</Text>
        <Text style={styles.productDescrip}>Blanca</Text>
        <Text style={styles.productPrice}>$850</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://ss436.liverpool.com.mx/xl/1059345857.jpg' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Playera Polo blue navy</Text>
        <Text style={styles.productDescrip}>Azul Marino</Text>
        <Text style={styles.productPrice}>$1,500</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://static.pullandbear.net/2/photos/2024/V/0/2/p/8678/503/707/8678503707_1_1_3.jpg?t=1713194582842' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Jogger Pull&Bear Caqui</Text>
        <Text style={styles.productDescrip}>Resorte en tobillo</Text>
        <Text style={styles.productPrice}>$899</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://cdn-images.farfetch-contents.com/19/29/93/30/19299330_44392264_600.jpg' }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>Tenis Air Jordan 4 Cement</Text>
        <Text style={styles.productDescrip}>Blancos con negro y gris</Text>
        <Text style={styles.productPrice}>$4,999</Text>
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

export default Kids;
