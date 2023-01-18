import { View, Text } from 'react-native';
import { useState } from 'react';

export default function Input({sendChangedText}) {
    const [text, setText] = useState ();
    function changeTextHandler (changedText) {
      setText(changedText);
      sendChangedText(changedText);
    }
    return (
      <View style={styles.container}>
        <TextInput 
        value = {text} 
        onChangeText= {changeTextHandler} 
        style = {{ backgroundColor: "#eee"}}/>
        <Text>{text}</Text>
      </View>
    );
  }