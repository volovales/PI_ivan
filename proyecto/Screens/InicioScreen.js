import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenid@</Text>
      <Text style={styles.subtitulo}>A Healt Hero una aplicación para aprender primeros auxilios básico</Text>

      <View style={styles.botonContainer}>
        <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate("Hemorragias")}
        >
          <Text style={styles.textoBoton}>Hemorragias</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botonContainer}>
        <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate("Rcp")}
        >
          <Text style={styles.textoBoton}>RCP</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.botonContainer}>
        <TouchableOpacity
        style={styles.boton}
        onPress={()=> navigation.navigate("Fractura")}>
          <Text style={styles.textoBoton}>Fracturas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botonContainer}>
        <TouchableOpacity
        style={styles.boton}
        onPress={()=> navigation.navigate("Esguince")}>
          <Text style={styles.textoBoton}>Esguince</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botonContainer}>
        <TouchableOpacity
        style={styles.boton}
        onPress={()=> navigation.navigate("Atragantamiento")}>
          <Text style={styles.textoBoton}>Atragantamiento</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botonContainer}>
        <TouchableOpacity
        style={styles.boton}
        onPress={()=> navigation.navigate("Quemadura")}>
          <Text style={styles.textoBoton}>Quemaduras</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 30,
    marginBottom: 30,
  },
  subtitulotitulo:{
    fontSize: 20,
    marginBottom: 30,
  },
  botonContainer: {
    marginTop: 20,
  },
  boton: {
    backgroundColor: '#ffffffff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 2
  },
  textoBoton: {
    color: '#000000ff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
