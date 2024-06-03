import React, { useEffect } from 'react';
import { Button } from 'react-native';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/screens/Home';
import Login from './app/screens/Login';
import 'react-native-get-random-values';
import ProductAdd from './app/screens/ProductAdd';
import ProductDetails, {
  Params as ProductDetailsParams,
} from './app/screens/ProductDetails';
import {
  EntradasScreen,
  MovimientosScreenParams,
  SalidasScreen,
} from './app/screens/MovimientosScreens';

import Sneakers from './app/screens/Sneakers';
import Shirts from './app/screens/Shirts';
import Jeans from './app/screens/Jeans';
import Kids from './app/screens/Kids';
import Discounts from './app/screens/Discounts';

import { ProductProvider } from './app/context/ProductContext';
import LocalDB from './app/persistance/localdb';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ProductDetails: ProductDetailsParams;
  ProductAdd: undefined;
  EntradasScreen: MovimientosScreenParams;
  SalidasScreen: MovimientosScreenParams;
  Sneakers: undefined;
  Shirts: undefined;
  Jeans: undefined;
  Kids: undefined;
  Discounts: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();



function App(): React.JSX.Element {
  useEffect(() => {
    // Inicializa la base de datos al montar la aplicación
    const initializeDB = async () => {
      await LocalDB.init();
    };

    initializeDB();
  }, []);

  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: '#ff0040' },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            
          />
          
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="ProductAdd" component={ProductAdd} />
          <Stack.Screen name="EntradasScreen" component={EntradasScreen} />
          <Stack.Screen name="SalidasScreen" component={SalidasScreen} />
          <Stack.Screen name="Sneakers" component={Sneakers} />
          <Stack.Screen name="Shirts" component={Shirts} />
          <Stack.Screen name="Jeans" component={Jeans} />
          <Stack.Screen name="Kids" component={Kids} />
          <Stack.Screen name="Discounts" component={Discounts} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}

export default App;
