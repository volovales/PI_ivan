import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from "react-native";

export default function Hemorragia() {

  const abrirVideo = () => {
    Linking.openURL("https://youtu.be/xylnXXm8R6s?si=osrQjiNmUQKPtulE");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <Text style={styles.title}>Hemorragias Externas</Text>

        <Text style={styles.subtitle}>Aviso Importante:</Text>
        <Text style={styles.text}>
          En caso de emergencias, llama a la línea de emergencias de tu localidad.
          Esta app es solo una guía educativa y no sustituye la atención médica profesional.
        </Text>

        <Text style={styles.subtitle}>¿Qué es?</Text>
        <Text style={styles.text}>
          Es la pérdida de sangre a través de los vasos sanguíneos hacia los tejidos o al exterior
          del cuerpo. Si no se atiende a tiempo puede causar debilidad o incluso estado de choque.
        </Text>

        <Text style={styles.subtitle}>Pasos a seguir</Text>
        <Text style={styles.text}>
          1. Identifica el origen de la hemorragia.{"\n"}
          2. Retira ropa que esté cubriendo la herida.{"\n"}
          3. Coloca una gasa para evitar la pérdida de sangre y contaminación.{"\n"}
          4. Ejerce presión directa con la palma de tu mano.{"\n"}
          5. Coloca una gasa encima de la anterior y cúbrela con un vendaje.
        </Text>

        <Text style={styles.text}>
          Si la hemorragia continúa, llama a los servicios de emergencia.
        </Text>

        <Text style={styles.subtitle}>Video Explicativo</Text>

        <Text style={styles.text}>A continuación se deja un video explicando este tema</Text>
        <Image
          source={require('../assets/hemorragia.jpg')}
          style={styles.videoImage}
        />

        {/* BOTÓN PARA ABRIR EL VIDEO */}
        <Button 
          title="Ver video" 
          color="red" 
          onPress={abrirVideo}
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 15,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "700",
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 23,
  },
  videoImage: {
    width: "100%",
    height: 400,
    alignSelf: 'center',
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 40,
  },
});
