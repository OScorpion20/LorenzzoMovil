import React, { useEffect, useState } from 'react';
import { Alert, Button, SafeAreaView, Text, TextInput } from 'react-native';
import { Product } from '../model/Product';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import LocalDB from '../persistance/localdb';
import style from '../style';

export type MovimientosScreenParams = {
  product: Product;
};

export function EntradasScreen(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'EntradasScreen'>>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [cantidad, setCantidad] = useState<number>(0);

  const btnOnPress = async () => {
    if (cantidad <= 0) {
      Alert.alert('Error', 'La cantidad debe ser mayor que cero');
      return;
    }
    if (product) {
      await agregarMovimiento(product, new Date(), cantidad);
      await updateStock(product, cantidad);
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Producto no encontrado');
    }
  };

  useEffect(() => {
    setProduct(route.params.product);
  }, [route]);

  return (
    <SafeAreaView>
      <Text>{product?.nombre}</Text>
      <Text>Cantidad</Text>
      <TextInput
        style={style.textInput}
        keyboardType="numeric"
        onChangeText={t => setCantidad(Number.parseInt(t, 10))}
        value={cantidad.toString()}
      />
      <Button title="Registrar entrada" onPress={btnOnPress} />
    </SafeAreaView>
  );
}

export function SalidasScreen(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'SalidasScreen'>>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [cantidad, setCantidad] = useState<number>(0);

  const btnOnPress = async () => {
    if (cantidad <= 0) {
      Alert.alert('Error', 'La cantidad debe ser mayor que cero');
      return;
    }
    if (product) {
      await agregarMovimiento(product, new Date(), cantidad * -1);
      await updateStock(product, cantidad * -1);
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Producto no encontrado');
    }
  };

  useEffect(() => {
    setProduct(route.params.product);
  }, [route]);

  return (
    <SafeAreaView>
      <Text>{product?.nombre}</Text>
      <Text>Cantidad</Text>
      <TextInput
        style={style.textInput}
        keyboardType="numeric"
        onChangeText={t => setCantidad(Number.parseInt(t, 10))}
        value={cantidad.toString()}
      />
      <Button title="Registrar salida" onPress={btnOnPress} />
    </SafeAreaView>
  );
}

async function agregarMovimiento(
  product: Product,
  fechaHora: Date,
  cantidad: number
) {
  const db = await LocalDB.connect();
  await db.transaction(async tx => {
    await tx.executeSql(
      'INSERT INTO movimientos (id_producto, fecha_hora, cantidad) VALUES (?, ?, ?)',
      [product.id, fechaHora.toISOString(), cantidad],
      (_, result) => {
        console.log('Movimiento agregado:', result);
      },
      (tx, error) => {
        console.error('Error al agregar movimiento:', error);
        return true; // Detiene la transacción
      }
    );
  });
}

async function updateStock(product: Product, cantidad: number) {
  const db = await LocalDB.connect();
  db.transaction(async tx => {
    tx.executeSql(
      'UPDATE productos SET currentStock = (currentStock + ?) WHERE id = ?',
      [cantidad, product.id],
      (_, result) => {
        console.log('Stock actualizado:', result);
      },
      (tx, error) => {
        console.error('Error al actualizar stock:', error);
        return true; // Detiene la transacción
      }
    );
  });
}
