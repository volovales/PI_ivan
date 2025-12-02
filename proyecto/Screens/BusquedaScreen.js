import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { 
  initSearchDB, 
  getHistory, 
  addToHistory, 
  deleteFromHistory,
  clearHistory
} from '../database/Database';

export default function Busqueda({ navigation }) {
  const [q, setQ] = useState('');
  const [historial, setHistorial] = useState([]);

  const datos = [
    { name: "Hemorragias", screen: "Hemorragias" },
    { name: "RCP", screen: "Rcp" },
    { name: "Fracturas", screen: "Fractura" },
    { name: "Esguince", screen: "Esguince" },
    { name: "Atragantamiento", screen: "Atragantamiento" },
    { name: "Quemaduras", screen: "Quemadura" },
    { name: "Números Emergencias", screen: "NumerosTab" }
  ];

  useEffect(() => {
    initSearchDB();
    cargarHistorial();
  }, []);

  const cargarHistorial = async () => {
    const rows = await getHistory();
    setHistorial(rows);
  };

  const handleGuardar = async (texto) => {
    await addToHistory(texto);
    cargarHistorial();
  };

  const handleEliminar = async (id) => {
    await deleteFromHistory(id);
    cargarHistorial();
  };

  const handleLimpiarTodo = async () => {
    await clearHistory();
    cargarHistorial();
  };

  const handleSelect = (item) => {
    handleGuardar(item.name);
    navigation.navigate(item.screen);
  };

  const filtrados =
    q.trim() === ''
      ? []
      : datos.filter(d => d.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar..."
        value={q}
        onChangeText={setQ}
        style={styles.input}
      />

      {historial.length > 0 && q.trim() === '' && (
        <TouchableOpacity style={styles.botonLimpiar} onPress={handleLimpiarTodo}>
          <Text style={styles.botonTexto}>Eliminar Todo el Historial</Text>
        </TouchableOpacity>
      )}

      {q.trim() === '' ? (
        <FlatList
          data={historial}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={() =>
            historial.length > 0 ? <Text style={styles.titulo}>Historial</Text> : null
          }
          renderItem={({ item }) => (
            <View style={styles.histItem}>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => setQ(item.texto)}>
                <Text style={styles.itemText}>{item.texto}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleEliminar(item.id)}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={filtrados}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex:1, 
    padding:16, 
    backgroundColor:'#fff' 
  },
  input:{ 
    borderWidth:1, 
    borderColor:'#b22222', 
    padding:10, 
    borderRadius:10, 
    marginBottom:12,
    marginTop: 40 
  },
  titulo:{ fontSize:18, fontWeight:'bold', marginBottom:10 },
  item:{ padding:12, backgroundColor:'#f3f3f3', borderRadius:8, marginBottom:8, borderWidth:1, borderColor:'#ddd' },
  itemText:{ fontSize:16 },
  histItem:{
    flexDirection:'row',
    alignItems:'center',
    padding:12,
    backgroundColor:'#f8f8f8',
    borderRadius:8,
    marginBottom:8,
    borderWidth:1,
    borderColor:'#ddd'
  },
  botonLimpiar:{
    backgroundColor:'#b22222',
    padding:10,
    borderRadius:8,
    marginBottom:10,
    alignItems:'center'
  },
  botonTexto:{ color:'#fff', fontWeight:'bold' }
});
