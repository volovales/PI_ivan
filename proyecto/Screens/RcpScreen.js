import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from "react-native";

export default function Rcp() {

  const abrirVideo = () => {
    Linking.openURL("https://youtu.be/7SBBka5fwW8?si=ZWylzhNTZ6IS5R5E");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <Text style={styles.title}>RCP (Reanimación Cardiopulmonar)</Text>

        <Text style={styles.subtitle}>Aviso Importante:</Text>
        <Text style={styles.text}>
          En caso de emergencias, llama a la línea de emergencias de tu localidad.
          Esta app es solo una guía educativa y no sustituye la atención médica profesional.
        </Text>

        <Text style={styles.subtitle}>¿Qué es?</Text>
        <Text style={styles.text}>
          El RCP es un conjunto de maniobras de emergencia que permite mantener la circulación sanguínea y la oxigenación
          de los órganos vitales (como el cerebro y los pulmones) cuando el corazón deja de latir o cuando la persona deja de
          respirar normalmente. Esta técnica se aplica cuando alguien está inconsciente, no responde y no respira con normalidad.
        </Text>

        <Text style={styles.subtitle}>Pasos a seguir</Text>
        <Text style={styles.text}>
          1. Verifica que el lugar sea seguro{"\n"}
          2. Comprueba si la persona responde{"\n"}
          3. Llama a los servicios de emergencia{"\n"}
          4. Abre la via aérea inclinando la cabeza y levantando el mentón{"\n"}
          5. Verifica si respira normalmente{"\n"}
          NOTA: Si con esto no recibes respuesta de la persona, realiza lo siguiente:{"\n"}
          6. Si no respira, inicia compresiones en la parte central del pecho (con una profundidad aproximadamente de 5 a 6 cm) siguiendo el ritmo de las canciones como "Stayin' Alive" de los Bee Gees, "Con todos menos conmigo" de Timbiriche o "El Club" de Bad Bunny. {"\n"}
          7. Continua las compresiones hasta que el cuerpo médico llegue o hasta que la personas muestre signos de reacción.
        </Text>


        <Text style={styles.subtitle}>Video Explicativo</Text>

        <Text style={styles.text}>A continuación se dejara un video explicando este tema</Text>
        <Image
          source={require('../assets/rcp.jpg')}
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
