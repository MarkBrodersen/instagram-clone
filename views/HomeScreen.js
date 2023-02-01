import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);
  console.log(data.name);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.name}, {item.id}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;
