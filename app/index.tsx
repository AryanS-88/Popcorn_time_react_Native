import React from 'react'
import { StatusBar, Text, View } from 'react-native'

export default function index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl font-bold text-red-500">Namastae</Text>
      <StatusBar style="auto" />
    </View>
  )
}
