import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PaginaInicial({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Bem-vindo(a)!</Text>
          <Text style={styles.subtitle}>Que bom ter você por aqui.</Text>
        </View>
      </View>

      {/* Frase do começo */}

      <View style={styles.banner}>
        <Text style={styles.title}>Sua jornada começa aqui.{"\n"}</Text>

        <Text style={styles.description}>
          Mais tranquilidade para cada caminho. Acompanhe seus trajetos e
          mantenha quem importa por perto.
        </Text>
      </View>
      {/* Primeiro card de opcoes */}
      <View style={styles.startCard}>
        <Text style={styles.cardTitle}>Vai sair agora?</Text>

        <Text style={styles.cardDescription}>
          Inicie um acompanhamento e compartilhe seu trajeto.
        </Text>
        <Pressable
          style={styles.startButton}
          onPress={() => navigation.navigate("Mapa")}
        >
          <Text style={styles.startButtonText}>Iniciar acompanhamento →</Text>
        </Pressable>
      </View>
      {/* Card pequenos embaixo */}
      <View style={styles.quickSection}>
        <Text style={styles.sectionTitle}>Acesso rápido</Text>

        <View style={styles.quickActions}>
          <Pressable
            style={styles.quickCard}
            onPress={() => navigation.navigate("Social")}
          >
            <Ionicons name="people-outline" size={28} color="#8B7CFF" />
            <Text style={styles.quickText}>Social</Text>
          </Pressable>
          <Pressable
            style={styles.quickCard}
            onPress={() => navigation.navigate("Mapa")}
          >
            <Ionicons name="map-outline" size={28} color="#8B7CFF" />
            <Text style={styles.quickText}>Meu mapa</Text>
          </Pressable>

          <Pressable
            style={styles.quickCard}
            onPress={() => navigation.navigate("Historico")}
          >
            <Ionicons name="time-outline" size={28} color="#8B7CFF" />
            <Text style={styles.quickText}>Histórico</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030013",
    padding: 20,
  },

  header: {
    marginTop: 50,
  },

  greeting: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#A5A2B8",
    fontSize: 14,
    marginTop: 5,
  },

  banner: {
    marginTop: 55,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  description: {
    color: "#A5A2B8",
    fontSize: 15,
    marginTop: 0,
    lineHeight: 23,
  },
  startCard: {
    marginTop: 45,
    backgroundColor: "#17142B",
    padding: 22,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#292440",
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  cardDescription: {
    color: "#A5A2B8",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 21,
  },

  startButton: {
    backgroundColor: "#8B7CFF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  quickSection: {
    marginTop: 35,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15,
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  quickCard: {
    flex: 1,
    backgroundColor: "#17142B",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#292440",
    paddingVertical: 20,
    alignItems: "center",
    gap: 10,
  },

  quickText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
});
