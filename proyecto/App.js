import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./Screens/InicioScreen";
import Hemorragia from "./Screens/HemorragiasScreen";
import Rcp from "./Screens/RcpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Hemorragias" component={Hemorragia} />
        <Stack.Screen name="Rcp" component={Rcp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
