import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from "react-native";

export default function Atragantamiento() {

  const abrirVideo = () => {
    Linking.openURL("https://youtu.be/2txGz7zLdHE?si=YngRTFq7zeTX1psY");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <Text style={styles.title}>Atragantamientos</Text>

        <Text style={styles.subtitle}>Aviso Importante:</Text>
        <Text style={styles.text}>
          En caso de emergencias, llama a la línea de emergencias de tu localidad.
          Esta app es solo una guía educativa y no sustituye la atención médica profesional.
        </Text>

        <Text style={styles.subtitle}>¿Qué es?</Text>
        <Text style={styles.text}>
          El atragantamiento ocurre cuando un objeto, alimento u otra sustancia bloquea por completo o parcialmente las vias respiratorios, impidiendo que el aire llegue a los pulmones.
          Es una situación potencialmente grave que requiere actuar de inmediato ya que si no se logran hacer los procedimientos necesarios puede complicarse la situación.
        </Text>

        <Text style={styles.subtitle}>Pasos a seguir</Text>
        <Text style={styles.text}>
          1. Asegura que el lugar sea seguro y llame a el cuerpo de emergencia lo más rápido posible.{"\n"}
          2. Pregunta si puede llegar a tose o a hablar.{"\n"}
          3. Si no puede respirar, aplique 5 golpes en la zona media de espalda.{"\n"}
          4. Si con esto no se logra liberar para que la persona respire normalmente, aplique la maniobra de Heimlich (presiones rápidas en la zona de estomago tres dedos arriba del ombligo) como se muestra en el video explicativo.{"\n"}
          5. Alterne la maniobra hasta qeu el objeto salga o hasta que llegue la ayuda médica. {"\n"}
          6. Si se pierde el conocimiento, aplique RCP.{"\n"}
        </Text>

        <Text style={styles.text}>En el caso de bebés</Text>
        <Text style={styles.text}>
            1. Llame al cuerpo de emergencias pertinente.{"\n"}
            2. Mientras la ayuda llega aplique 5 golpes firmes en la parte de la espalda. {"\n"}
            3. Aplique 5 compresiones en la zona del pecho.
        </Text>

        <Text style={styles.subtitle}>Video Explicativo</Text>

        <Text style={styles.text}>A continuación se deja un video explicando este tema</Text>
        <Image
          source={require('../assets/atragantamiento.jpg')}
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
