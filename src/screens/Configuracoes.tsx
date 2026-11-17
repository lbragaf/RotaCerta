import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.clicableCard}
      onPress={() => navigation.navigate("ConfigMinhaConta")}>
        <Text style={styles.titleCard}>Minha conta</Text>
        <Text style={styles.descriptionCard}>
          Nome, foto de perfil, ID de usuário, alterar senha e sair da conta.
        </Text>
      </Pressable>

      <Pressable style={styles.clicableCard}
      onPress={() => navigation.navigate("ConfigLocalizacao")}>
        <Text style={styles.titleCard}>Localização</Text>
        <Text style={styles.descriptionCard}>
          Permitir compartilhamento, definir quem pode ver sua localização e
          interromper compartilhamentos ativos.
        </Text>
      </Pressable>

      <Pressable style={styles.clicableCard}
      onPress={() => navigation.navigate("ConfigNotificacao")}>
        <Text style={styles.titleCard}>Notificações</Text>
        <Text style={styles.descriptionCard}>
          Mensagens, solicitações de contato, alertas de chegada e avisos de localização.
        </Text>
      </Pressable>
      
      <Pressable style={styles.clicableCard}
      onPress={() => navigation.navigate("ConfigPrivESeguranca")}>
        <Text style={styles.titleCard}>Privacidade e segurança</Text>
        <Text style={styles.descriptionCard}>
          Contatos bloqueados, permissões, sessões ativas e configurações de visibilidade.
        </Text>
      </Pressable>

      <Pressable style={styles.clicableCard}
      onPress={() => navigation.navigate("ConfigAparencia")}>
        <Text style={styles.titleCard}>Aparência</Text>
        <Text style={styles.descriptionCard}>
          Tema escuro, claro ou seguir o tema do celular. 
        </Text>
      </Pressable>  

      <Pressable style={styles.clicableCard}
      onPress={() => navigation.navigate("ConfigAjudaESuporte")}>
        <Text style={styles.titleCard}>Ajuda e suporte</Text>
        <Text style={styles.descriptionCard}>
          Perguntas frequentes, contato com suporte, termos de uso e política de privacidade.
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
