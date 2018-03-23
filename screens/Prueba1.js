/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  TextInput,
  Button,
  Alert,
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  TouchableWithoutFeedback,
  ScrollView

} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//componente hijo
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

//componente hijo2
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

        
class Prueba1 extends Component{

  _onPressButton() {
    Alert.alert('presiono corto!')
  }

  _onLongPressButton() {
    Alert.alert('presiono largo!')
  }

  constructor(props) {
    super(props);
    this.state = {text_estado: ''};

  }
 
   render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (

      <View style={{alignItems: 'center'}}>


<ScrollView>
      <Image source={pic} style={{width: 293, height: 100}}/>
        <Greeting name='Javier' />
        <Greeting name='Guimoye' />
        <Greeting name='Montilla' />
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />

        <TextInput
          style={{height: 40,
          width:300}}
          placeholder="Type here to translate!"  
          onChangeText={(text_estado) => this.setState({text_estado})}
        />

        <Text style={{fontSize: 42}}>
          {this.state.text_estado.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>

<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>boton1</Text>
          </View>
        </TouchableHighlight>

         <TouchableHighlight 
        onPress={this._onPressButton} 
        onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>boton4</Text>
          </View>
        </TouchableHighlight>


        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>boton2</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>boton3</Text>
          </View>
        </TouchableNativeFeedback>

        </ScrollView>


      </View>
    );

  /*  return (

      <View style={styles.container}>


      <Button
        onPress={() => {
         Alert.alert(
           'Titulo: You tapped the button!',
           'Message: Probando botton :)');
        }}
        title="Press Me"
      />


        <Text style={styles.welcome}>
          Welcome Prueba1 :)!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

      </View>
    );*/
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 10
   },
   alternativeLayoutButtonContainer: {
     margin: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'red'
  }
 
});

export default Prueba1;