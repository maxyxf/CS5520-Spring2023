import { View, Text } from 'react-native'
import React from 'react'

export default function Header({name}) {
  console.log(name);
  return (
    <View>
      <Text>Welcome to {name}</Text>
    </View>
  )
}