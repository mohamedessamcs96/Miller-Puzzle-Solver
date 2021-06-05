import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
    <StatusBar style="auto"/>
      <View style={styles.header}>
        <Image 
          source={require('./logo.png')}
          resizeMode="stretch"
          style={{width:450,height:350}}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Improve your memory and concentration skills</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <TouchableOpacity 
        style={{backgroundColor: '#0c4271',borderRadius:25,alignItems:'center',padding:10,margin:5}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize:15,color:'#fff'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c4271',
  },
  header:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{ 
    flex:1,
    justifyContent: 'flex-start',
    padding:5,
    backgroundColor: '#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:50,
  },
  title:{
    color: '#05375a',
    fontSize:30,
    fontWeight:'bold'
  },
  text:{
   color:'grey',
   padding:3,
  }
});
