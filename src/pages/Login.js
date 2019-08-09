import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function Login() {
  return (
    <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}
     >

        <Image source={require('../assets/logo.png')} />

        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no GitHub"
        placeholderTextColor="#999"
        style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
