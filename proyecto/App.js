import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Tabs (pantallas principales)
import Inicio from './Screens/InicioScreen';
import Busqueda from './Screens/BusquedaScreen';
import Numeros from './Screens/NumerosEmergenciaScreen';

// Pantallas internas (detalles)
import Hemorragias from './Screens/HemorragiaScreen';
import Rcp from './Screens/RcpScreen';
import Fractura from './Screens/FracturasScreen';
import Esguince from './Screens/EsguincesScreen';
import Atragantamiento from './Screens/AtragantamientoScreen';
import Quemadura from './Screens/QuemadurasScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#b22222' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ffdcdc',
      }}
    >
      <Tab.Screen
        name="InicioTab"
        component={Inicio}
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
        }}
      />

      <Tab.Screen
        name="BuscarTab"
        component={Busqueda}
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />
        }}
      />

      <Tab.Screen
        name="NumerosTab"
        component={Numeros}
        options={{
          title: 'Emergencias',
          tabBarIcon: ({ color, size }) => <Ionicons name="call" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tabs como pantalla principal (práctica) */}
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />

        {/* Pantallas internas que se navegan desde Inicio u otras pantallas */}
        <Stack.Screen name="Hemorragias" component={Hemorragias} />
        <Stack.Screen name="Rcp" component={Rcp} />
        <Stack.Screen name="Fractura" component={Fractura} />
        <Stack.Screen name="Esguince" component={Esguince} />
        <Stack.Screen name="Atragantamiento" component={Atragantamiento} />
        <Stack.Screen name="Quemadura" component={Quemadura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}