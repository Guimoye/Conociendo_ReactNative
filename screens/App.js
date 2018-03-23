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
  Button  

} from 'react-native';
import { Pie } from 'react-native-pathjs-charts'

//componente hijo
class Loading extends Component{
  render(){
    return(
      <Text>Loading...</Text>
    )
  }
}


//componente hijo
class ChildComponent extends Component{
  render(){
   
      if(this.props.result){
        var res = this.props.result.map((item,i) =>{
          return(
            <Text key ={i} > {item.title}</Text>
          )
        }) 
      }
    

    return(
      <View>
        <View style={this.props.status ? styles.on : styles.off }/>
        {this.props.result ? res : <Loading/>}
      </View>
    )
  }
}

//componente padre
export default class App extends Component {

  constructor(){
    super()
    this.state={
      status: false,
      data:   null
    }
  }

  //consumir api, ejecutar contenido del DOM
  componentDidMount(){
    fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson.movies
      })
    })
  }

  clicked(){
    this.setState({
      status: !this.state.status
    })
  }


  render() {

    let data = [{
      "name": "Washington",
      "population": 7694980
    }, {
      "name": "Oregon",
      "population": 2584160
    }, {
      "name": "Minnesota",
      "population": 6590667
    }, {
      "name": "Alaska",
      "population": 7284698
    }]

    let options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }



    return (
      <View style={styles.container}>
    
        <ChildComponent 
        status  = {this.state.status}
        result  = {this.state.data}
        />

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

          <Button
          onPress = {this.clicked.bind(this)}
          title   = 'Click here'
          color   = 'red'
        />

        <Pie
          data={data}
          options={options}
          accessorKey="population" />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  on:{
    width: 100,
    height: 100,
    backgroundColor: 'yellow'
  },
  off:{
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }

});
