import React from 'react';
import { Button, Text, View, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => false
  return (
    <View style = {styles.container}>

      <View>
        <Button 
           onPress = {handlePress}
           title = "Red button!"
           color = "red"
        />
        <Text>This is a button displayed using the Button component!</Text>
      </View>
      
      {/* <View style = {styles.container}> */}
         
         <TouchableOpacity>
              <Text style = {styles.textOpacity}>
                  Button
              </Text>
              {/* <Text>This is an element with touchable opacity!</Text> */}
         </TouchableOpacity> 

         <TouchableHighlight>
              <Text style = {styles.textHighlight}>
                    Button
              </Text>
              {/* <Text>This is an element with touchable highlight!</Text> */}
         </TouchableHighlight>

          <TouchableNativeFeedback>
                <Text style = {styles.textNative}>Button</Text>
                {/* <Text>This is an element with touchable native feedback!</Text> */}
          </TouchableNativeFeedback>

          <TouchableWithoutFeedback>
                <Text style = {styles.textwFeedback}>Button</Text>
                {/* <Text>This is an element with touchable without feedback</Text> */}
          </TouchableWithoutFeedback>

      {/* </View>  */}
      
    </View>
    
  )
}
export default App

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  textOpacity: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red',
    margin: 5,
  },
  textHighlight: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'pink',
    margin: 5,
  },
  textNative: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'yellow',
    margin: 5,
  },
  textwFeedback: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'grey',
  }
});

