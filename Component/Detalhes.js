
//Details.js
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
const Details = props => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    const {state} = props.navigation;
    fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
      .then(res => res.json())
      .then(details => setDetails(details));
  };

  return details.name ? (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFF00'}}>
  <Card>
  <Card.Title >{details.name}</Card.Title>
  <Card.Divider/>
  <Card.Image  style={{width: 300, height: 300}}  source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                        details.name
                      }.png`,
                    }}>
  </Card.Image>
  <Text style={styles.text}>Nome: {details.name}</Text>
  <Text style={styles.text}>Altura: {details.height}</Text>
      <Text style={styles.text}>Peso: {details.weight}</Text>
      <Text style={styles.text}>
        Habilidade: {details.abilities[0].ability.name}
      </Text>
      <Text style={styles.text}>Tipo: {details.types[0].type.name}</Text>
  </Card>
    </View>
    
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#FFFF00" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 0,
    height: 0,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
