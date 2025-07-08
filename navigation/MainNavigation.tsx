import { createDrawerNavigator } from "@react-navigation/drawer";
import { CreateScreen } from "../screens/CreateScreen";
import { ActualizarScreen } from "../screens/ActualizarScreen";
import { EliminarScreen } from "../screens/EliminarScreen";
import { LeerScreen } from "../screens/LeerScreen";
import { TotalScreen } from "../screens/TotalScreen";
import { NavigationContainer } from "@react-navigation/native";
const Draw = createDrawerNavigator();

const MyDraw = () => {
  return (
    <Draw.Navigator>
      <Draw.Screen name="Create" component={CreateScreen} />
      <Draw.Screen name="Actualizar" component={ActualizarScreen} />
      <Draw.Screen name="Eliminar" component={EliminarScreen} />
      <Draw.Screen name="Leer" component={LeerScreen} />
      <Draw.Screen name="Total" component={TotalScreen} />
    </Draw.Navigator>
  );
};
export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyDraw />
    </NavigationContainer>
  );
};
