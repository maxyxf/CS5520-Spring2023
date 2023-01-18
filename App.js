import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const name = "my awesome app";
  return (
    <View style={styles.container}>
      <Text>
        Welcome to {name}</Text>
      <StatusBar style="auto" />
      <Header name = "Max"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
