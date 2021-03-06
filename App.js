
//App.js
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Pokemons from './Component/Pokemons';
import Detalhes from './Component/Detalhes';

const appNavigator = createStackNavigator(
  {
    Pokemons: {
      screen: Pokemons,
    },
    Detalhes: {
      screen: Detalhes,
    },
  },
  {
    initialRouteName: 'Pokemons',
  },
);

const AppContainer = createAppContainer(appNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
