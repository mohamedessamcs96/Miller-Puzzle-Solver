import React, {Component} from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity ,StyleSheet,TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class Jokes extends React.Component {

   state={
            showBunch:false,
            showJoke:false,
            joke:[
                {type:"general",setup:"Why are oranges the smartest fruit?",punchline:"Because they are made to concentrate."},
                {type:"general",setup:"Why are oranges the smartest fruit?",punchline:"Because they are made to concentrate."}

               
            ]
        }
        
      
        
    fetchdata=async()=>{
        const response=await fetch('https://official-joke-api.appspot.com/random_joke')
        const json=await response.json();
        this.setState({joke:json})
          }

 
        
          handleToggleButton=()=>{
            this.fetchdata();
            this.setState((state)=>({
                showJoke:!state.showJoke,
            }));
             }
             showBunch=()=>{
                 this.setState((state)=>({
                    showBunch:!state.showBunch
                 }))
             }
    render(){
        //const randomNumber=Math.floor((Math.random() * 100) + 1)
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <StatusBar style="auto"/>
                <View style={styles.header}>
                <Text style={styles.title}>Miller puzzles Solver</Text>
                </View>
                <View style={styles.footer}>
               
                    {this.state.showJoke==true &&(
                    <View style={styles.joke}>
                    <Text style={styles.joketype}>Type:{this.state.joke.type}</Text>
                    <Text style={styles.jokesetup}>{this.state.joke.setup}</Text>
                    </View>
                    )}
                    {this.state.showBunch==true &&(
                    <View style={styles.joke}>
                    <Text style={styles.jokePunchline}>{this.state.joke.punchline}</Text>
                    </View>
                    )}
                     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding :10,margin:10}}>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => this.showBunch() }>
                        <Text style={{fontSize:15,color:'#fff'}}>Get Answer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => this.handleToggleButton()}>
                        <Text style={{fontSize:15,color:'#fff'}}>Get Joke</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>


        );
    }}


  
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#0c4271'
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
      },
      footer:{ 
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
      },
      title:{
        color: '#fff',
        fontSize:30,
        fontWeight:'bold'
      },
      joke:{
          alignItems:'center',
          justifyContent:'center',
      },
      joketype:{
        fontSize:24,
        fontWeight:'bold',
        color:'#0c4271',

      },
      jokesetup:{
        fontSize:18,
        textAlign:'center',
        color:'#0c4271',
      },
      btn:{backgroundColor: '#0c4271',borderRadius:25,alignItems:'center',padding:10,margin:5,justifyContent:'center'},
      jokePunchline:{
        fontSize:12,
        textAlign:'center',
        color:'#0c4271',
      }
  });  


 