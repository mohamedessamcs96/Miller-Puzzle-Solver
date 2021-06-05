import React, {Component} from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity ,StyleSheet,TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import { Icon } from 'react-native-elements'
export default class Login extends React.Component {

   state={
            username:'',
            password:'',
            isDone:true,
        }
        
       

        handleusername = (text) => {
            this.setState({username: text})
        }
        handlepassword = (text) => {
            this.setState({password: text})
        }
        handlepawwordagain = (text) => {
            this.setState({passwordagain: text})
        }   

    login =() => {
        if(this.state.isDone==true){
        this.props.navigation.navigate('Jokes');
    }
      }
    render(){
       
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <StatusBar style="auto"/>
                <View style={styles.header}>
                <Text style={styles.textheader}>Miller puzzles Solver</Text>
                </View>
                <View style={styles.footer}>
                <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={this.handleusername}
                />
                <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
                />
                <TouchableOpacity style={styles.signinbutton} 
                onPress={() =>this.login()}>
                    <Text style={styles.signintext}>Login</Text>
                    </TouchableOpacity>
                <View style={styles.navpage}>
                <Text style={styles.navpagetext}>Don't have an account? </Text>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={styles.signuptext}>Signup</Text>
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
    textheader:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
    },
    input:{
        alignItems:'center',
        alignSelf:'stretch',
        padding:16,
        //marginBottom:20,
        backgroundColor:'rgba(255,255,255,0.3)',
        color:'#1c313a',
        borderRadius:25,
    },
    signinbutton:{
        alignSelf:'stretch',
        backgroundColor:'#0c4271',
        padding:16,
        alignItems:'center',
        color:'#fff',
        fontSize:14,
        borderRadius:25,
    },
    signintext:{
        color:'#fff',
        fontSize:12,
        justifyContent:'flex-end',
        fontWeight:'bold'
       

    },
    signuptext:{
        color:'#0c4271',
        fontSize:12,
        justifyContent:'flex-end',
        fontWeight:'bold'
       

    },
    navpage:{
        padding:5,
        flexDirection:'row',
        fontSize:10,
        color:'#fff',
        paddingLeft:2,
        justifyContent:'center',
        alignItems:'center'
    },
    navpagetext:{
        fontSize:12,
        color:'#0c4271',
        
    }
  });  


 