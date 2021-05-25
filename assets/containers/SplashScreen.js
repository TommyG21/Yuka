import React from "react";
import { View, Text, Button } from "react-native";

function Splashscreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bienvenue sur Yuka ! </Text>
      <Button
        title="Commencer à vérifier mes produits"
        onPress={() => navigation.navigate("Camera")}
      />
    </View>
  );
}

export default Splashscreen;
