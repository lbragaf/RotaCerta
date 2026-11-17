
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Social({ navigation }: any) {
  function abrirAdicionarContato() {
    navigation.navigate("AdicionarContato");
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Conversas</Text>
          <Text style={styles.subtitle}>
            Converse com seus contatos
          </Text>
        </View>

        <Pressable style={styles.searchButton}>
          <Ionicons name="search" size={23} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Estado vazio */}
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIcon}>
          <Ionicons
            name="chatbubbles-outline"
            size={48}
            color="#8B7CFF"
          />
        </View>

        <Text style={styles.emptyTitle}>
          Suas conversas começam aqui
        </Text>

        <Text style={styles.emptyDescription}>
          Você ainda não adicionou ninguém.
          Adicione uma pessoa para começar a conversar!
        </Text>

        <Pressable
          style={styles.addButton}
          onPress={abrirAdicionarContato}
        >
          <Ionicons name="person-add-outline" size={20} color="#FFFFFF" />

          <Text style={styles.addButtonText}>
            Adicionar alguém
          </Text>
        </Pressable>
      </View>

      {/* Botão flutuante */}
      <Pressable
        style={styles.floatingButton}
        onPress={abrirAdicionarContato}
      >
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </Pressable>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#A5A2B8",
    fontSize: 14,
    marginTop: 5,
  },

  searchButton: {
    backgroundColor: "#17142B",
    padding: 12,
    borderRadius: 14,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 50,
  },

  emptyIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#17142B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },

  emptyDescription: {
    color: "#A5A2B8",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
    marginTop: 12,
  },

  addButton: {
    backgroundColor: "#8B7CFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 17,
    borderRadius: 15,
    width: "100%",
    marginTop: 28,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  floatingButton: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#8B7CFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
});
