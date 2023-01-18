import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const name = "my awesome app";
  const [text, setText] = useState ();
  function changeTextHandler (changedText) {
    setText(changedText);
  }
  return (
    <View style={styles.container}>
      <Text>
        Welcome to {name}</Text>
      <StatusBar style="auto" />
      <Header name = "Max"/>
      <TextInput 
      value = {text} 
      onChangeText= {changeTextHandler} 
      style = {{ backgroundColor: "#eee"}}/>
      <Text>{text}</Text>
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
