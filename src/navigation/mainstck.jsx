import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from "../pages/LogIn.jsx";
import SingIn from "../pages/SingIn.jsx";
import VoiceTest from "../pages/VoiceTest.jsx";
import APITEST from "../pages/APITest.jsx";
import Home from "../pages/Home.jsx";
import RegisterMH from "../pages/RegisterMH.jsx";
import VisualizeMH from "../pages/VisualizeMH copy.jsx";
import Login1 from "../pages/Login1.jsx";
import Singin1 from "../pages/Singin1.jsx";
import presentacion from "../pages/Presentacion.jsx"
import HU from "../components/HistoriaClinica.jsx";
import RegisterHistoria from "../pages/Registrar_historia.jsx";
import Edision from "../pages/Edision.jsx";
import Actualizar from "../pages/Actualizacion.jsx";
const stack = createNativeStackNavigator()

const Mainstack = () => {
    return(
    <NavigationContainer> 
       <stack.Navigator
       screenOptions={
        {
            headerShown:true,
        }}
       ><stack.Screen
       name='Login1'
       component={Login1}
      />
       <stack.Screen
       name='Registrarse'
       component={Singin1}
      />
      <stack.Screen
       name='Home'
       component={Home}
      />
      <stack.Screen
      name='RegistrarHC'
      component={RegisterMH}
     />
     <stack.Screen
      name='Firma'
      component={presentacion}
     />
     <stack.Screen
      name='VisualizeMH'
      component={VisualizeMH}
     />
       <stack.Screen
        name='HU'
        component={HU}
       />
       <stack.Screen
       name='RegisterHistoria'
       component={RegisterHistoria}
      />
      <stack.Screen
       name='Edision'
       component={Edision}
      />
      <stack.Screen
       name='Actualizar'
       component={Actualizar}
      />

       </stack.Navigator>   

    </NavigationContainer>
    )
}
export default Mainstack