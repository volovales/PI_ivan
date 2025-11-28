import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';


export default function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [genero, setGenero] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [screen, setScreen] = useState('inicio');

  const registrar = () => {
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      usuario.trim() === '' ||
      genero.trim() === '' ||
      correo.trim() === '' ||
      contrasena.trim() === '' ||
      confirmar.trim() === ''
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }
    if (contrasena !== confirmar) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    Alert.alert("Registro exitoso", "Tu cuenta ha sido creada.");
  };

  switch (screen) {
    case 'regresar':
      return <MenuScreen />;
    default:
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>

            {/* botón de regreso */}
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('regresar')}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>

            {/* Título */}
            <Text style={styles.titulo}>Crear una{"\n"}cuenta</Text>

            {/* FORM */}
            <View style={styles.form}>
              <Text style={styles.label}>Nombre:</Text>
              <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

              <Text style={styles.label}>Apellido:</Text>
              <TextInput style={styles.input} value={apellido} onChangeText={setApellido} />

              <Text style={styles.label}>Nombre de Usuario:</Text>
              <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} />

              <Text style={styles.label}>Género:</Text>
              <TextInput style={styles.input} value={genero} onChangeText={setGenero} />

              <Text style={styles.label}>Correo Electrónico:</Text>
              <TextInput
                style={styles.input}
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
              />

              <Text style={styles.label}>Contraseña:</Text>
              <TextInput
                style={styles.input}
                value={contrasena}
                onChangeText={setContrasena}
                secureTextEntry
              />

              <Text style={styles.label}>Confirmar Contraseña:</Text>
              <TextInput
                style={styles.input}
                value={confirmar}
                onChangeText={setConfirmar}
                secureTextEntry
              />
            </View>

            {/* BOTÓN */}
            <TouchableOpacity style={styles.boton} onPress={registrar}>
              <Text style={styles.textoBoton}>Registrarse</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingBottom: 40,
  },

  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },

  backArrow: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  titulo: {
    marginTop: 80,
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'serif',
  },

  form: {
    width: '80%',
    marginTop: 40,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
  },

  input: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#8b0000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 40,
  },

  textoBoton: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});