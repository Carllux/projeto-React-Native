import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card() {
  return (
    <View style={styles.card} >
      <Text style={styles.cardTitle}>Criando aplicação web </Text>
      <Text style={styles.cardSubtitle}>Testando React native </Text>
    </View>

  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#999',
    fontSize: 14,
  }
}
)

