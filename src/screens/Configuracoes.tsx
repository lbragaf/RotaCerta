import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Configuracoes({ navigation }: any) {
  function changeScreen(screenName: string) {
    navigation.navigate(screenName);
  }
  return (
    <View style={styles.container}>
      //Minha Conta
      <Pressable
        style={styles.clicableCard}
        onPress={() => navigation.navigate("ConfigMinhaConta")}
      >
        <Text style={styles.titleCard}>
          <Ionicons name="person-circle-outline" size={20} color="#FFFFFF" />{" "}
          Minha conta
        </Text>
        <Text style={styles.descriptionCard}>
          Nome, foto de perfil, ID de usuário, alterar senha e sair da conta.
        </Text>
      </Pressable>
      //Localizacao
      <Pressable
        style={styles.clicableCard}
        onPress={changeScreen.bind(null, "ConfigLocalizacao")}
      >
        <Text style={styles.titleCard}>
          <Ionicons name="compass-outline" size={20} color="#FFFFFF" />
          Localização
        </Text>
        <Text style={styles.descriptionCard}>
          Permitir compartilhamento, definir quem pode ver sua localização e
          interromper compartilhamentos ativos.
        </Text>
      </Pressable>
      //Notificacao
      <Pressable
        style={styles.clicableCard}
        onPress={changeScreen.bind(null, "ConfigNotificacao")}
      >
        <Text style={styles.titleCard}>
          <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
          Notificações
        </Text>
        <Text style={styles.descriptionCard}>
          Mensagens, solicitações de contato, alertas de chegada e avisos de
          localização.
        </Text>
      </Pressable>
      //Privacidade e Segrurança
      <Pressable
        style={styles.clicableCard}
        onPress={changeScreen.bind(null, "ConfigPrivESeguranca")}
      >
        <Text style={styles.titleCard}>
          <Ionicons name="lock-closed-outline" size={20} color="#FFFFFF" />
          Privacidade e segurança
        </Text>
        <Text style={styles.descriptionCard}>
          Contatos bloqueados, permissões, sessões ativas e configurações de
          visibilidade.
        </Text>
      </Pressable>
      //Aparencia
      <Pressable
        style={styles.clicableCard}
        onPress={changeScreen.bind(null, "ConfigAparencia")}
      >
        <Text style={styles.titleCard}>
          <Ionicons name="shirt-outline" size={20} color="#FFFFFF" />
          Aparência
        </Text>
        <Text style={styles.descriptionCard}>
          Tema escuro, claro ou seguir o tema do celular.
        </Text>
      </Pressable>
      //Ajuda e suporte
      <Pressable
        style={styles.clicableCard}
        onPress={changeScreen.bind(null, "ConfigAjudaESuporte")}
      >
        <Text style={styles.titleCard}>
          <Ionicons name="man-outline" size={20} color="#FFFFFF" />
          Ajuda e suporte
        </Text>
        <Text style={styles.descriptionCard}>
          Perguntas frequentes, contato com suporte, termos de uso e política de
          privacidade.
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  titleCard: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionCard: {
    color: "#A5A2B8",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 21,
  },
  clicableCard: {
    backgroundColor: "#8B7CFF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
});
