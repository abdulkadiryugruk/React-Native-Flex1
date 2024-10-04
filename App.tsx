/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';



const App = ()=>{
  

  return (
    <SafeAreaView style={styles.background}>
      {/* burasi flex kismi */}
      <View style={{flex:1,backgroundColor:'red'}}/>
      <View style={{flex:2,backgroundColor:'green'}}/>
      <View style={{flex:1,backgroundColor:'orange'}}/>


      {/* burasi flex direction kismi */}
      <View style={{flexDirection:'row'}}>

      <View style={{width:100, height:75,backgroundColor:'blue'}}/>
      <View style={{width:100, height:75,backgroundColor:'tomato'}}/>
      <View style={{width:100, height:75,backgroundColor:'grey'}}/>
      </View>

      {/* burasi flex direction kismi */}
      <View style={{flexDirection:'column',}}>
        
      <View style={{width:100, height:75,backgroundColor:'purple'}}/>
      <View style={{width:100, height:75,backgroundColor:'tomato'}}/>
      <View style={{width:100, height:75,backgroundColor:'grey'}}/>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor:"white",
    flex:1,
  },
  
});

export default App;
