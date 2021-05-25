import React from "react";
import { View, Text, Button } from "react-native";

function ProductScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Fiche produit</Text>
      <Button
        title="Produit scanné"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}

export default ProductScreen;
