import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./Screens/InicioScreen";
import Hemorragia from "./Screens/HemorragiasScreen";
import Rcp from "./Screens/RcpScreen";
import Fractura from "./Screens/FracturasScreen";
import Esguince from "./Screens/EsguincesScreen";
import Atragantamiento from "./Screens/AtragantamientoScreen";
import Quemadura from "./Screens/QuemadurasScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Hemorragias" component={Hemorragia} />
        <Stack.Screen name="Rcp" component={Rcp}/>
        <Stack.Screen name="Fractura" component={Fractura}/>
        <Stack.Screen name="Esguince" component={Esguince}/>
        <Stack.Screen name="Atragantamiento" component={Atragantamiento}/>
        <Stack.Screen name="Quemadura" component={Quemadura}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
