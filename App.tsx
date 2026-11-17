
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import PaginaInicial from "./src/screens/PaginaInicial";
import Social from "./src/screens/Social";
import Mapa from "./src/screens/Mapa";
import Configuracoes from "./src/screens/Configuracoes";
import Historico from "./src/screens/Historico";

import ConfigMinhaConta from "./src/screens/ConfigMinhaConta";
import ConfigLocalizacao from "./src/screens/ConfigLocalizacao";
import ConfigNotificacao from "./src/screens/ConfigNotificacao";
import ConfigPrivESeguranca from "./src/screens/ConfigPrivESeguranca";
import ConfigAparencia from "./src/screens/ConfigAparencia";
import ConfigAjudaESuporte from "./src/screens/ConfigAjudaESuporte";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ConfiguracoesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Configuracoes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Configuracoes"
        component={Configuracoes}
      />

      <Stack.Screen
        name="ConfigMinhaConta"
        component={ConfigMinhaConta}
      />

      <Stack.Screen
        name="ConfigLocalizacao"
        component={ConfigLocalizacao}
      />

      <Stack.Screen
        name="ConfigNotificacao"
        component={ConfigNotificacao}
      />

      <Stack.Screen
        name="ConfigPrivESeguranca"
        component={ConfigPrivESeguranca}
      />

      <Stack.Screen
        name="ConfigAparencia"
        component={ConfigAparencia}
      />

      <Stack.Screen
        name="ConfigAjudaESuporte"
        component={ConfigAjudaESuporte}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Mapa"
        screenOptions={{
          headerShown: false,

          tabBarActiveTintColor: "#8B7CFF",
          tabBarInactiveTintColor: "#77738D",

          tabBarHideOnKeyboard: true,

          tabBarStyle: {
            backgroundColor: "#17142B",
            borderTopColor: "#292440",
            height: 70,
            paddingBottom: 10,
            paddingTop: 8,
          },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={PaginaInicial}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Social"
          component={Social}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Mapa"
          component={Mapa}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Historico"
          component={Historico}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="reader-outline" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Configuracoes"
          component={ConfiguracoesStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
