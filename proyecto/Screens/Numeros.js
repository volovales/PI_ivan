import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Numeros() {
  const llamar = (num) => Alert.alert('Simulado', 'Marcando: ' + num);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Números de Emergencia</Text>

      <TouchableOpacity style={styles.card} onPress={() => llamar('911')}>
        <Text style={styles.cardText}>Emergencias (911)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => llamar('065')}>
        <Text style={styles.cardText}>Cruz Roja (065)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => llamar('068')}>
        <Text style={styles.cardText}>Bomberos (068)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20, backgroundColor:'#fff' },
  titulo:{ fontSize:22, fontWeight:'700', marginBottom:16, color:'#b22222', textAlign:'center' },
  card:{ padding:14, borderRadius:10, backgroundColor:'#fafafa', borderWidth:1, borderColor:'#ddd', marginBottom:12 },
  cardText:{ fontSize:16 }
});