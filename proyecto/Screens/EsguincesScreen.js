import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from "react-native";

export default function Esguince() {

  const abrirVideo = () => {
    Linking.openURL("https://youtu.be/IxFpbOI971Q?si=9JQt3Ajreh9kKs4S");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <Text style={styles.title}>Esguinces</Text>

        <Text style={styles.subtitle}>Aviso Importante:</Text>
        <Text style={styles.text}>
          En caso de emergencias, llama a la línea de emergencias de tu localidad.
          Esta app es solo una guía educativa y no sustituye la atención médica profesional.
        </Text>

        <Text style={styles.subtitle}>¿Qué es?</Text>
        <Text style={styles.text}>
          Un esguince es una lesión en un ligamento, es decir la estructura que ayuda a conectar a los huesos entre si en una articulación,
          que se produce por un estiramiento excesivo o un "desgarro" parcial.
          Los esguinces pueden presentarse en cualquier articulación, aunque son más comunes en tobillos, muñecas y rodillas. Dependiendo del grado de daño, los síntomas pueden incluir dolor, inflamación, moretones, dificultad para mover la articulación y en casos más severos ocurre la inestabilidad.
        </Text>

        <Text style={styles.subtitle}>Tipos de Esguinces</Text>
        <Text style={styles.text}>
          Todos son provocados por accidentes, caídad, mal movimiento, etc. {"\n"}
          + Primer Grado: Estos son los mas leves ya que son ocacionados por un estiramiento excesivo del ligamento sin llegar a una ruptura
            se identifican por ser menos dolorosos, poca hinchazón y con una movilidad de la zona casi normal.{"\n"}
          + Segundo Grado: Son los cuales tienen una rotura parcial del ligamento y se identifican por ser tener un dolor más intenso que el anterior, una
            hinchazón mas marcada y se le dificulta mover o apoyar la articulación de la zona. {"\n"}
          + Tercer Grado: EL cuál cuenta con una rotura completa del ligamento y se identifica por un dolor intenso, hinchazón muy marcada y no logra hacer ningún movimiento
            de la zona afectada.
        </Text>

        <Text style={styles.subtitle}>Pasos a seguir</Text>
        <Text style={styles.text}>
          1. Asegura que el lugar sea seguro.{"\n"}
          2. Identifica la zona de la lesión y llame a el cuerpo de emergencia lo más rápido posible.{"\n"}
          3. De todo lo posible asegure que la persona no mueva esa zona.{"\n"}
          4. Aplique algo frio de forma local sin tener contacto directo con la piel, para que con esto reducir la inflamación de esta zona.{"\n"}
          5. Eleve un poco la zona solo si es posible y teniendo consciencia de la comodidad de la persona.{"\n"}
          6. Inmovilice o sujete la zona con alguna prenda hasta que llegue el cuerpo médico y le proporcione la atención necesaria.{"\n"}
        </Text>

        <Text style={styles.subtitle}>Video Explicativo</Text>

        <Text style={styles.text}>A continuación se deja un video explicando este tema</Text>
        <Image
          source={require('../assets/esguince.jpeg')}
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
