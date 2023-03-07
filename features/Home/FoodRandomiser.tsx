import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import foodList from "./food.json"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blacks",
    alignItems: "center",
    justifyContent: "center",
  },
  foodFace: {
    fontSize: 100,
    color: "black",
  },
});

export const FoodRandomiser = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [food, setFood] = useState('');

  const handlePress = () => {
    setTimesPressed(current => current + 1);

    if (timesPressed + 1 > 1) {
      setFood(`${foodList[Math.floor(Math.random() * 100)]}`);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        accessibilityLabel="Show me my food face"
      >
        <Text>FEED ME</Text>
      </Pressable>
      <Text style={styles.foodFace}>{food}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export const homeButton = <View style={styles.container}></View>;
