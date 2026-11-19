import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AdicionarContato({ navigation }: any) {
  const [userId, setUserId] = useState("");

  function buscarUsuario() {
    // Futuramente vamos consultar o servidor pelo ID.
    console.log("Buscando usuário:", userId.trim());
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>

        <Text style={styles.headerTitle}>Adicionar contato</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-add-outline" size={38} color="#8B7CFF" />
        </View>

        <Text style={styles.title}>Encontre seus amigos</Text>

        <Text style={styles.description}>
          Digite o ID exclusivo da pessoa que deseja adicionar.
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={21} color="#A5A2B8" />

          <TextInput
            style={styles.input}
            placeholder="Ex: USR-A83F92D1"
            placeholderTextColor="#77738D"
            value={userId}
            onChangeText={setUserId}
            autoCapitalize="characters"
            autoCorrect={false}
          />
        </View>

        <Pressable
          style={[styles.searchButton, !userId.trim() && styles.disabledButton]}
          onPress={buscarUsuario}
          disabled={!userId.trim()}
        >
          <Ionicons name="search" size={20} color="#FFFFFF" />

          <Text style={styles.searchButtonText}>Buscar usuário</Text>
        </Pressable>
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
    gap: 15,
  },

  backButton: {
    backgroundColor: "#17142B",
    padding: 10,
    borderRadius: 12,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
  },

  content: {
    marginTop: 65,
  },

  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 20,
    backgroundColor: "#17142B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  description: {
    color: "#A5A2B8",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#17142B",
    borderWidth: 1,
    borderColor: "#292440",
    borderRadius: 14,
    paddingHorizontal: 15,
    marginTop: 30,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    padding: 16,
    fontSize: 15,
  },

  searchButton: {
    backgroundColor: "#8B7CFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 17,
    borderRadius: 14,
    marginTop: 18,
  },

  disabledButton: {
    opacity: 0.45,
  },

  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
