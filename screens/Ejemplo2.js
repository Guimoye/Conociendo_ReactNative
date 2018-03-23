import React,{Component} from 'react';
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

class Ejemplo2 extends React.Component {


  //dibujando cabecera con estilo propio ignorando el estilo global
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
  
    return {
     headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="blue"
        />
      ),
    };
  };
  
  
    render() {
      //obteniendo parametros de pantalla anterior
      const { params }  = this.props.navigation.state;
      const itemId      = params ? params.itemId : null;
      const otherParam  = params ? params.otherParam : null;
      const msj         = params ? params.msj : null;
  
      return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
          <Text>Details Screen</Text>
      
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Text>Mensaje: {JSON.stringify(msj)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
  
  
          <Button
            title="Update the title"
            //cambiar parametros desde boton
            onPress={() => this.props.navigation.setParams({otherParam: 'cambio desde el boton'})}
          />
  
        </View>
      );
    }
  }
  

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./../images/spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default Ejemplo2;