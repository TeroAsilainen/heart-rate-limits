import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const lowerLimit: number = (ageAsNumber > 0) ? (220 - ageAsNumber) * 0.65 : 0
  const upperLimit: number = (ageAsNumber > 0) ? (220 - ageAsNumber) * 0.85 : 0

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        placeholder='Age'
        keyboardType='number-pad'
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text style={styles.text}>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 16,
    marginTop: 64,
  },
  heading: {
    marginTop: 32,
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 8,
    maxWidth: 128,
    marginVertical: 16,
  },
  text: {
    marginVertical: 4,
  }
});
