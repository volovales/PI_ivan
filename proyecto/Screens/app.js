import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./Screens/InicioScreen";
import Hemorragia from "./Screens/HemorragiaScreen";
import Rcp from "./Screens/RcpScreen";
import Fractura from "./Screens/FracturasScreen";
import Esguince from "./Screens/EsguincesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ title: "Pantalla principal" }}
        />

        <Stack.Screen 
          name="Hemorragia" 
          component={Hemorragia} 
        />

        <Stack.Screen 
          name="RCP" 
          component={Rcp} 
        />

        <Stack.Screen 
          name="Fractura" 
          component={Fractura} 
        />

        <Stack.Screen 
          name="Esguince" 
          component={Esguince} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
