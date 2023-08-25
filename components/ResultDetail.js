import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.smallText}>
        {result.rating} Yıldızlı Restaurant {result.review_count} değerlendirme
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    height: 105,
    borderRadius: 8,
    marginBottom:5
  },
  name:{
  fontWeight: 'bold',
  },
  smallText:{
    fontSize: 10
  }
});
