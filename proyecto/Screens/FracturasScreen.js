import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from "react-native";

export default function Fractura() {

  const abrirVideo = () => {
    Linking.openURL("https://youtu.be/Hhg2HKiAN-o?si=8BNNX5Pp0ZbXDP6h");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <Text style={styles.title}>Fracturas</Text>

        <Text style={styles.subtitle}>Aviso Importante:</Text>
        <Text style={styles.text}>
          En caso de emergencias, llama a la línea de emergencias de tu localidad.
          Esta app es solo una guía educativa y no sustituye la atención médica profesional.
        </Text>

        <Text style={styles.subtitle}>¿Qué es?</Text>
        <Text style={styles.text}>
          Una fractura es la ruptura parcial o total de un hueso, generalmente causada por golpes, caídas o accidentrs. 
          En el video de la Cruz Roja Mexicana que se encontrara mas adelante se explica que una fractura puede identificarse por dolor intenso, inflamación,
          dificultad para mover la zona afecta o la deformidad visible.
        </Text>

        <Text style={styles.subtitle}>Pasos a seguir</Text>
        <Text style={styles.text}>
          1. Verifica que el lugar sea seguro.{"\n"}
          2. En la manera más posible no muevas la extremidad afectada.{"\n"}
          3. Inmoviliza la zona afectada con algun objeto rijido o una prenda doblada.{"\n"}
          4. Aplica algo frío alrededor de la zona afectada y nunca lo apliques sobre la piel. {"\n"}
          5. Nunca intentes acomodar la extremidad ya que esta acción puede que afecte más.{"\n"}
          6. Una vez hecho esto llama a los servicios médicos correspondientes o puedes trasladarla lo antes posible.
        </Text>


        <Text style={styles.subtitle}>Video Explicativo</Text>

        <Text style={styles.text}>A continuación se dejara un video explicando este tema</Text>
        <Image
          source={require('../assets/fractura.jpg')}
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
