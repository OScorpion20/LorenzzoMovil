import React, { useState, useContext } from 'react';
import { Button, SafeAreaView, Text, TextInput, StyleSheet, Alert } from 'react-native';
import LocalDB from '../persistance/localdb';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { ProductContext } from '../context/ProductContext';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { Product } from '../model/Product';

export default function ProductAdd(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const context = useContext(ProductContext);
  const [nombre, setNombre] = useState<string>('');
  const [descripcion, setDesc] = useState<string>('');
  const [precio, setPrecio] = useState<string>('0');
  const [minStock, setMinStock] = useState<string>('0');

  if (!context) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: No se pudo cargar el contexto de productos.</Text>
      </SafeAreaView>
    );
  }

  const { addProduct } = context;

  const btnGuardarOnPress = async () => {
    if (!nombre || !precio || !minStock) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const parsedPrecio = parseFloat(precio);
    const parsedMinStock = parseInt(minStock, 10);

    if (isNaN(parsedPrecio) || isNaN(parsedMinStock)) {
      Alert.alert('Error', 'Precio y Min. Stock deben ser números válidos');
      return;
    }

    const newProduct: Product = {
      id: uuidv4(),
      nombre: nombre,
      descripcion: descripcion,
      precio: parsedPrecio,
      minStock: parsedMinStock,
    };

    console.log("New product to insert:", newProduct);

    try {
      const db = await LocalDB.connect();
      console.log("Database connected");
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO productos (id, nombre, descripcion, precio, minStock) VALUES (?, ?, ?, ?, ?)',
          [newProduct.id, newProduct.nombre, newProduct.descripcion, newProduct.precio, newProduct.minStock],
          () => {
            console.log("Product inserted successfully");
            console.log("Attempting to update context with new product");
            try {
              addProduct(newProduct); // Actualizar el contexto aquí
              console.log("Context updated successfully");
            } catch (error) {
              console.error("Error updating context:", error);
            }
            navigation.goBack();
          },
          (error) => {
            console.error("Error inserting product:", error);
            Alert.alert('Error', 'No se pudo guardar el producto en la base de datos');
            return true; // Detiene la transacción
          }
        );
      }, (error) => {
        console.error("Transaction error:", error);
        Alert.alert('Error', 'Ocurrió un error en la transacción');
      });
    } catch (error) {
      console.error("Database connection error:", error);
      Alert.alert('Error', 'Ocurrió un error al conectar con la base de datos');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} onChangeText={setNombre} value={nombre} />
      <Text style={styles.label}>Descripción</Text>
      <TextInput style={styles.input} onChangeText={setDesc} value={descripcion} />
      <Text style={styles.label}>Precio</Text>
      <TextInput style={styles.input} onChangeText={setPrecio} value={precio} keyboardType="numeric" />
      <Text style={styles.label}>Min. Stock</Text>
      <TextInput style={styles.input} onChangeText={setMinStock} value={minStock} keyboardType="numeric" />
      <Button title="Guardar" onPress={btnGuardarOnPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
