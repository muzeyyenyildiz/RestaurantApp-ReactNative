import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResult();
  const [term, setTerm] = useState("");
  const filterResultByPrice = (price) => {
    return results.filter((item) => item.price === price);
  };
  return (
    <View style={{ width: "100%" }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage !== "" ? <Text>{errorMessage}</Text> : null}
      {results.length == 0 ? (
        <Text>Restaurant Bulunamadı Lütfen Tekrar deneyiniz!</Text>
      ) : (
        <>
          <ResultList
            results={filterResultByPrice("₺")}
            title="Ucuz Restoranlar"
          />
          <ResultList
            results={filterResultByPrice("₺₺")}
            title="Uygun Restoranlar"
          />
          <ResultList
            results={filterResultByPrice("₺₺₺")}
            title="Pahalı Restoranlar"
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
