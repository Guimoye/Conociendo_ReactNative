
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button,
  Alert,
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  TouchableWithoutFeedback,
  ScrollView,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

//vistas
import DetailsScreen from './screens/DetailsScreen';
import Ejemplo2 from './screens/Ejemplo2';
import Prueba1 from './screens/Prueba1';
import FetchExample from './screens/FetchExample';
import FlatListBasics from './screens/FlatListBasics'
import ListViewMovie from './screens/ListViewMovie'
import App from './screens/App'

import NativeBase from './screens/NativeBase'

//componente
import ComponentText from './components/componenteTexto'

class Navegaciones extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <ComponentText/>
        

<Button
  title='NativeBase'
  onPress={() => {
    this.props.navigation.navigate('NativeBase');
  }}
></Button>

<Button
  title='Prueba1'
  onPress={() => {
    this.props.navigation.navigate('Prueba1');
  }}
></Button>

<Button
  title='FetchExample'
  onPress={() => {
    this.props.navigation.navigate('FetchExample');
  }}
  ></Button>

<Button
  title='FlatListBasics'
  onPress={() => {
    this.props.navigation.navigate('FlatListBasics');
  }}
  ></Button>

<Button
  title='ListViewMovie'
  onPress={() => {
    this.props.navigation.navigate('ListViewMovie');
  }}
  ></Button>

<Button
  title='App'
  onPress={() => {
    this.props.navigation.navigate('App');
  }}
  ></Button>
        
        <Button
          title="Go to Details"
          onPress={() => {
            // enviando parametros entre navegacion 
            this.props.navigation.navigate('Details', {
              itemId: 2018,
              otherParam: 'mensaje desde home',
              msj:'jeje',
              titulo:'titulo de llegada',

            });
          }}
         ></Button>

            <Button
          title="ejemplo2"
          
          onPress={() => {
            // enviando parametros entre navegacion 
            this.props.navigation.navigate('Ejemplo2', {
              itemId: 2018,
              otherParam: 'mensaje desde home',
              msj:'jeje',
              titulo:'titulo de llegada',

            });
          }}
          ></Button>
      </View>
    );
  }
}



//ejemplo2 clase


export default StackNavigator({

    Home: {
      screen: Navegaciones,
    },
    
    Details: {
      screen: DetailsScreen,
    },
    Ejemplo2:{
      screen: Ejemplo2,
    },
    Prueba1:{
      screen: Prueba1,
    },
    FetchExample:{
      screen: FetchExample,
    },
    FlatListBasics:{
      screen: FlatListBasics,
    },
    App:{
      screen: App,
    },
    ListViewMovie:{
      screen: ListViewMovie,
    },
    NativeBase:{
      screen: NativeBase,
    },
  },

  {
    initialRouteName: 'Home',
    /* moldear el encabeza igual para todas las vistas*/
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',

      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'blue'
      },
    },
    
  }
);


const styles = StyleSheet.create({
 
  espacioBoton: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop:20
  },
 

});