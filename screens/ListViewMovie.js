
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  Alert

} from 'react-native';

//import Navbar from 'components.Navbar'

//componente padre
export default class ListViewMovie extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
     dataSource: ds.cloneWithRows([]),
    };
  }

  //consumir api, ejecutar contenido del DOM
  componentDidMount(){
    var titles=[];
    fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      var movies = responseJson.movies;
        for(var i = 0; i< movies.length; i++){
         // array.push(movies[i].title);
          titles.push(movies[i].title);
        }

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(titles)
      })
    })
    
  }

  pressCell(rowData){
    Alert.alert(
    `titulo: ${rowData} :)`,
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  );
  }

  render() {

    return (
      <View style={styles.container}>
      <ListView
          enableEmptySections = {true}
          dataSource          = {this.state.dataSource}
          renderRow           = {(rowData) => 
          <TouchableHighlight onPress={()=>this.pressCell(rowData)}>
            <View style={styles.cell}>
              <Text>{rowData}</Text>
            </View>
          </TouchableHighlight>

          }
         
      />
      </View>
    );
 
  }

}

const styles = StyleSheet.create({
  
  cell:{
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#e29caf',
    paddingTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }

});
