import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TestComponent } from './testFile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO I AM A MOBILE DEVELOPER</Text>
      <Text>Realtime refresh</Text>
      <Text style={styles.foodFace}>FOOD FACE</Text>
      <TestComponent></TestComponent>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodFace: {
    fontSize: 100,
    color: 'white',
  },
});
