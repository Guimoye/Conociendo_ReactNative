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

class DetailsScreen extends React.Component {
  //titulo solo por defecto
/*
  static navigationOptions = {
    title: 'Details',
  };
*/


//dibujando cabecera con estilo propio ignorando el estilo global
static navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;

  return {
    title: params ? params.titulo : 'A Nested Details Screen',
    /* These values are used instead of the shared configuration! */
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  };
};




/*
//obteniendo titulo de pantalla anterior
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.titulo : 'A Nested Details Screen',

       //para colocar estilo a cabecera
    //  headerStyle: {
   //     backgroundColor: '#f4511e',
   //   },
   //   headerTintColor: '#fff',
   //   headerTitleStyle: {
   //     fontWeight: 'bold',
   //     color:'blue'
   //   },
      
    }
  };
*/
  

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


export default DetailsScreen;