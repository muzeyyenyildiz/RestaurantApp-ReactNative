import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result?.name}</Text>
      <Text style={styles.phone}>{result?.phone}</Text>
      {result.isClosed ? <AntDesign style={styles.iconClose} name="closecircleo" size={18} color="black" /> :
      <MaterialIcons style={styles.icon} name="delivery-dining" size={24} color="black" />}
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.images} source={{ uri: item }} />;
        }}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign:'center'
  },
  title:{
    alignSelf: 'center',
    marginVertical:10,
    fontSize:25,

  },
  phone:{
    fontSize:20,
    textAlign:'center'
  },
  iconClose:{
    color:'red',
    alignSelf:  'center',
  },
  icon:{
    color:'green',
    alignSelf:  'center',
  },
  images: {height: 150, margin: 10, borderRadius:20 },
});
