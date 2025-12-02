import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class SearchHistoryDB {
  constructor() {
    this.db = null;
    this.storageKey = 'historial_busqueda';
  }

  async initialize() {
    if (this.db) return;

    try {
      if (Platform.OS === 'web') {
        this.initializeWebStorage();
      } else {
        this.db = await SQLite.openDatabaseAsync('historial.db');

        await this.db.execAsync(`
          CREATE TABLE IF NOT EXISTS historial (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            texto TEXT UNIQUE
          );
        `);
      }

      console.log('Historial inicializado');
    } catch (error) {
      console.error('ERROR iniciando historial:', error);
    }
  }

  initializeWebStorage() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  async obtenerHistorial() {
    if (Platform.OS === 'web') {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } else {
      return await this.db.getAllAsync('SELECT * FROM historial ORDER BY id DESC');
    }
  }

  async guardarHistorial(texto) {
    if (!texto) return;

    if (Platform.OS === 'web') {
      let data = JSON.parse(localStorage.getItem(this.storageKey)) || [];

      if (!data.some(i => i.texto === texto)) {
        data.unshift({ id: Date.now(), texto });
        localStorage.setItem(this.storageKey, JSON.stringify(data));
      }
      return true;

    } else {
      await this.db.runAsync(
        'INSERT OR IGNORE INTO historial (texto) VALUES (?)',
        [texto]
      );
      return true;
    }
  }

  async eliminarHistorial(id) {
    if (Platform.OS === 'web') {
      let data = JSON.parse(localStorage.getItem(this.storageKey)) || [];
      data = data.filter(item => item.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;

    } else {
      await this.db.runAsync('DELETE FROM historial WHERE id = ?', [id]);
      return true;
    }
  }

  async limpiarHistorial() {
    if (Platform.OS === 'web') {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
      return true;

    } else {
      await this.db.execAsync('DELETE FROM historial');
      return true;
    }
  }
}

const searchHistoryDB = new SearchHistoryDB();

export const initSearchDB = () => searchHistoryDB.initialize();
export const getHistory = () => searchHistoryDB.obtenerHistorial();
export const addToHistory = (texto) => searchHistoryDB.guardarHistorial(texto);
export const deleteFromHistory = (id) => searchHistoryDB.eliminarHistorial(id);
export const clearHistory = () => searchHistoryDB.limpiarHistorial();

export default searchHistoryDB;
