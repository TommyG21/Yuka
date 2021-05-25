import React from "react";
import { View, Text, Button } from "react-native";

function FavoritesScreen({ navigation }) {
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

export default FavoritesScreen;
