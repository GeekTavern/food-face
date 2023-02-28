import { StyleSheet, Text, View } from 'react-native';

interface testInterface {
  firstName: string;
  lastName: string;
}

const testFunction = (a: number, b: number): testInterface => {
  return { firstName: String(a + b), lastName: 'test' };
};

export const TestComponent = () => {
  return (
    <View>
      <Text>I am a test component</Text>
      <Text></Text>
      <Text>{testFunction(9, 1).lastName}</Text>
      <Text>{testFunction(9, 1).firstName}</Text>
    </View>
  );
};
