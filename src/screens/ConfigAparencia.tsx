import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function ConfigAparencia() {
  return (
    <View style={styles.container}>
      <Text>Arrogante</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});