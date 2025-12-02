import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

export default function Busqueda({ navigation }) {
  const [q, setQ] = useState('');
  const datos = [
    { name: "Hemorragias", screen: "Hemorragias" },
    { name: "RCP", screen: "Rcp" },
    { name: "Fracturas", screen: "Fractura" },
    { name: "Esguince", screen: "Esguince" },
    { name: "Atragantamiento", screen: "Atragantamiento" },
    { name: "Quemaduras", screen: "Quemadura" },
    { name: "Números Emergencias", screen: "NumerosTab" }
  ];

  const filtrados = q.trim() === '' ? [] : datos.filter(d => d.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar..."
        value={q}
        onChangeText={setQ}
        style={styles.input}
      />
      <FlatList
        data={filtrados}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, padding:16, backgroundColor:'#fff' },
  input:{ borderWidth:2, borderColor:'#b22222', padding:10, borderRadius:10, marginBottom:12 },
  item:{ padding:12, backgroundColor:'#f3f3f3', borderRadius:8, marginBottom:8, borderWidth:1, borderColor:'#ddd' },
  itemText:{ fontSize:16 }
});