//App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inicio from "./Componentes/Inicio.js";
import Deportes from './Componentes/Deportes.js';
import Negocios from "./Componentes/Negocios.js";
import Variedades from "./Componentes/Variedades.js";
import Salud from "./Componentes/Salud.js";
import Ciencia from "./Componentes/Ciencia.js";
import Entretenimiento from "./Componentes/Entretenimiento.js";
import Tecnologia from "./Componentes/Tecnologia.js";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Deportes" component={Deportes} />
        <Drawer.Screen name="Negocios" component={Negocios} />
        <Drawer.Screen name="Variedades" component={Variedades} />
        <Drawer.Screen name="Salud" component={Salud} />
        <Drawer.Screen name="Ciencia" component={Ciencia} />
        <Drawer.Screen name="Entretenimiento" component={Entretenimiento} />
        <Drawer.Screen name="Tecnologia" component={Tecnologia} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
