import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

const MAPTILER_KEY = process.env.EXPO_PUBLIC_MAPTILER_KEY;

export default function Mapa() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [settingRun, setSettingRun] = useState(false);

  useEffect(() => {
    async function getLocation() {
      // Solicita permissão de localização
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permissão de localização negada");
        return;
      }

      // Obtém a posição atual
      const currentLocation = await Location.getCurrentPositionAsync({});

      setLocation(currentLocation);
    }

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="none"
        region={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }
            : {
                latitude: -23.5505,
                longitude: -46.6333,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
        }
      >
        <UrlTile
          urlTemplate={`https://api.maptiler.com/maps/streets-v4/256/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`}
          maximumZ={19}
          tileSize={256}
        />

        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Minha localização"
            description="Você está aqui"
          />
        )}
      </MapView>
      //Configurar outro bagulhete pro pressable e deixar esse startrun pra tela
      de fato
      <Pressable style={styles.startRunButton} onPress={() => setSettingRun(true)}>
        <Text>Começar corrida</Text>
      </Pressable>
      {settingRun && (
        <View style={styles.startRun}>
          <Text>Convidar pessoas para a corrida</Text>

          <Pressable onPress={() => setSettingRun(false)}>
            <Text>Fechar</Text>
          </Pressable>
        </View>
      )}
      
      <View style={styles.info}>
        {location ? (
          <>
            <Ionicons name="location" size={30} color="black" />
            <Text style={styles.infoText}>Localização ativa</Text>
          </>
        ) : (
          <>
            <Ionicons name="search" size={30} color="black" />
            <Text style={styles.infoText}>Obtendo localização...</Text>
          </>
        )}
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  info: {
    position: "absolute",
    top: 40,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    opacity: 0.6,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },
  startRunButton: {
    position: "absolute",
    top: 600,
    // alignSelf: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    opacity: 0.6,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  startRun: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
