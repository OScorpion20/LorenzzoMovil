import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { RootStackParamList } from '../../App';
import { ProductContext } from '../context/ProductContext';

type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenProps;
  route: HomeScreenRoute;
};

function Home({ navigation }: HomeProps): React.JSX.Element {
  const context = useContext(ProductContext);

  if (!context) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.errorText}>Error: No se pudo cargar el contexto de productos.</Text>
      </SafeAreaView>
    );
  }

  const { products } = context;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Aquí puedes agregar cualquier lógica adicional que necesites cuando la pantalla esté en foco.
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>LORENZZO</Text>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Sneakers')}>
          <Text style={styles.navbarItem}>Sneakers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shirts')}>
          <Text style={styles.navbarItem}>Shirts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Jeans')}>
          <Text style={styles.navbarItem}>Jeans</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Kids')}>
          <Text style={styles.navbarItem}>Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discounts')}>
          <Text style={styles.navbarItem}>%</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>LORENZZO como estilo de vida</Text>
      <Text style={styles.description}>
        Las mejores marcas y atención para nuestros clientes en México
      </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.nombre}</Text>
            <Text style={styles.productDescription}>{item.descripcion}</Text>
            <Text style={styles.productPrice}>${item.precio}</Text>
          </View>
        )}
        ListHeaderComponent={
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductAdd')}>
            <Text style={styles.buttonText}>AGREGAR PRODUCTOS</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
    marginBottom: 16,
  },
  navbarItem: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  productItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 8,
    width: '100%',
    paddingHorizontal: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Home;
