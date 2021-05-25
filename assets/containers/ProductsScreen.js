import React from "react";
import { View, Text, Button } from "react-native";

function ProductsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Liste de vos produits</Text>
      <Button title="Produits" onPress={() => navigation.navigate("Camera")} />
    </View>
  );
}

export default ProductsScreen;
