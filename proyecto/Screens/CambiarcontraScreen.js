import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RecuperarContrasenaScreen({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [nuevaPass, setNuevaPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>

        {/* Flecha */}
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={{ alignSelf: "flex-start" }}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.title}>Recuperar</Text>
        <Text style={styles.title2}>CONTRASEÑA</Text>

        {/* Usuario */}
        <Text style={styles.label}>Nombre de Usuario:</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
        />

        {/* Correo */}
        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
        />

        {/* Nueva contraseña */}
        <Text style={styles.label}>NuevaContraseña:</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          value={nuevaPass}
          onChangeText={setNuevaPass}
        />

        {/* Confirmar */}
        <Text style={styles.label}>Confirmar Contraseña:</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          value={confirmPass}
          onChangeText={setConfirmPass}
        />

        {/* Botón */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    fontSize: 32,
    marginTop: 10,
    fontFamily: "serif",
  },
  title2: {
    fontSize: 28,
    marginBottom: 20,
    fontFamily: "serif",
  },

  label: {
    alignSelf: "flex-start",
    marginLeft: 8,
    fontSize: 14,
    marginTop: 15,
  },

  input: {
    width: "90%",
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 4,
    marginTop: 3,
  },

  button: {
    backgroundColor: "#7A0000",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
    marginTop: 40,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
