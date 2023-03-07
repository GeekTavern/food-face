import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Camera, CameraType } from "expo-camera";

import foodList from "./food.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  foodFace: {
    fontSize: 800,
    color: "black",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginBottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "transparent"
  },
  topOverlay: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: "center",
    alignItems: "center",
  },
});

export const FoodRandomiser = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [food, setFood] = useState("");
  const [type] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [showFood, setShowFood] = useState(false);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handlePress = () => {
    setTimesPressed((current) => current + 1);

    if (timesPressed + 1 > 0) {
      setFood(`${foodList[Math.floor(Math.random() * 100)]}`);
      setShowFood(true);
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio='16:9'>
        <Pressable
          onPress={handlePress}
          accessibilityLabel="Show me my food face"
          style={styles.button}
        >
          <Text>FEED ME</Text>
        </Pressable>
        {showFood && (
          <View style={styles.topOverlay}>
            <Text style={styles.topText}>{food}</Text>
          </View>
        )}
        <StatusBar style="auto" />
      </Camera>
    </View>
  );
};

export const homeButton = <View style={styles.container}></View>;
