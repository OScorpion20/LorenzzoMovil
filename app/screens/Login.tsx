import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '80%',
    margin: 8,
  },
});

function Login(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Iniciar sesión</Text>
        <TextInput style={styles.textInput} placeholder="Usuario" />
        <TextInput
          style={styles.textInput}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <Button title="Ingresar" />
      </View>
    </SafeAreaView>
  );
}

export default Login;
