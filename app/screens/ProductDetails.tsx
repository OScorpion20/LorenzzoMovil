import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../model/Product';
import 'react-native-get-random-values';
import LocalDB from '../persistance/localdb';

export type Params = {
  product: Product;
};

export type Props = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

function ProductDetails({ route, navigation }: Props): React.JSX.Element {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = await LocalDB.connect();
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM productos WHERE id = ?',
          [route.params.product.id],
          (_, { rows }) => {
            if (rows.length > 0) {
              const item = rows.item(0);
              const fetchedProduct: Product = {
                id: item.id,
                nombre: item.nombre,
                descripcion: item.descripcion,
                precio: parseFloat(item.precio),
                minStock: parseInt(item.minStock, 10),
              };
              setProduct(fetchedProduct);
            }
          },
          error => {
            console.error(error);
          }
        );
      });
    };

    fetchProduct();
  }, [route]);

  if (!product) {
    return (
      <SafeAreaView style={style.page}>
        <Text style={style.header}>Cargando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.page}>
      <View>
        <Text style={style.header}>{product.nombre}</Text>
        
        <View style={style.row}>
          <Text style={[style.text, style.col]}>Precio:</Text>
          <Text style={[style.text, style.col]}>Descripción:</Text>
          <Text style={[style.text, style.colAuto]}>
            $ {product.precio.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={style.row}>
        <Button
          title="Entrada"
          onPress={() => navigation.push('EntradasScreen', { product })}
        />
        <Button
          title="Salida"
          onPress={() => navigation.push('SalidasScreen', { product })}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    margin: 16,
  },
  header: {
    fontSize: 48,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  col: {
    flexGrow: 1,
  },
  colAuto: {},
  stockError: {
    color: 'red',
  },
  text: {
    fontSize: 24,
  },
});

export default ProductDetails;
