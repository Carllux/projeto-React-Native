import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Montanna</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2A2A2A',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// });

export default function App() {
  return (
    <View style={[styles.container, {
      // flexDirection: "column"
    }]}>
      <StatusBar style="light" />

      <View style={{ flex: 1, backgroundColor: "red", alignItems: 'center' }} >
        <Text style={styles.title}>Montanna</Text>
        <Card />
      </View>

      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    color: 'black',
    marginBottom: 24
    // alignItems: 'center',
  },
}
)

