import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function CameraScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Utilisez le scan ci-dessous</Text>
      <Button
        title="Scanner votre produit"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}

export default CameraScreen;
