import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from "react-native";

export default function Quemaduras() {

  const abrirVideo = () => {
    Linking.openURL("https://youtu.be/cECkv6xUuTY?si=kW4V4IxdgwM4EphO");
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
          Una quemadura es una lesión en la piel o tejidos internes, que son causadas por el calor, llamas, líquidos calientes, sustancias químicas, electricidad o radiación.
          Las quemaduras pueden provocar dolor, enrojecimiento, ampollas, inflamación e incluso daño interno, su gravedad se clasifica según la profundidad y la extensión de la lesión,
          en primeros auxilios, es fundamental enfriar la zona con agua corriente, evitar romper ampollas y buscar atención médica si la quemadura es extensa, profunda o afecta zonas sensibles como cara, manos, pies o genitales.
        </Text>

        <Text style={styles.subtitle}>Pasos a seguir</Text>
        <Text style={styles.text}>
          1. Asegura que el lugar sea seguro y traslade al afectado y en caso de quemadura muy grave a causa de algo electrico o químico llame a el cuerpo de emergencia lo más rápido posible.{"\n"}
          2. Identifique la zona con la quemadura.{"\n"}
          3. Retire la fuente causante de la quemadura.{"\n"}
          4. De inmediato retire cualquier prenda y accesorio de la zona de la quemadura para así lograr evitar que se peguen dichas cosas en la zona.{"\n"}
          5. En caso de quemaduras objetos caliente en la zona afectada aplicar agua fria para así controlar un poco la quemadura. {"\n"}
          6. Si observa que empieza el brote de ampollas no las reviente ni aplique ningún tipo de remedio casero ya que esto puede ayudar a la infección de la zona.{"\n"}
          7. En caso de que la quemadura sea extensa, profunda o en zonas sensibles (manos, cara, pies o los genitales) busque atención medica de inmediato.
        </Text>


        <Text style={styles.subtitle}>Video Explicativo</Text>

        <Text style={styles.text}>A continuación se deja un video explicando este tema</Text>
        <Image
          source={require('../assets/quemaduras.jpg')}
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
