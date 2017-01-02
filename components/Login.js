import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

let logo = require('image!logo'),
    Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window'),
    back_icon = require('image!back_icon'),
    NavigationBar = require('react-native-navbar');

class StartPage extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  logIn(){
    let context = this;
    // context.props.navigator.push({
    //   component: require('./CameraSnap')
    // })
    console.log('inside log in')
  }
  forgotPassword(){
    let context = this;
    context.props.navigator.push({
      component:require('./ResetPassword')
    })
  }
  render() {
    let context = this;
    return (
      <View style={{flex:1}}>
        <NavigationBar
            leftButton= {
              <TouchableOpacity  onPress={() => context.props.navigator.pop()}>
                <Image source={back_icon} style={{top:12,left:6}}/>
              </TouchableOpacity>}
            style = {{backgroundColor:'#5a0fb4'}} />
        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*5}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff'}}>Log In</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:18,fontWeight:'600'}}>USERNAME</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff'}}
              onChangeText={(username) => context.setState({username})}
            />
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:18,fontWeight:'600'}}>PASSWORD</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              password={true}
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff'}}
              onChangeText={(password) => context.setState({password})}
            />
          </View>
          <TouchableOpacity onPress={()=>context.forgotPassword()}><Text style={{fontSize:16,fontWeight:'700',color:'#ffffff',textAlign:'center',marginVertical:(Screen.height/100)*3}}>Forgot Your Password?</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>context.logIn()} style={{alignItems:'center',justifyContent:'center',marginVertical:10,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:18}}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a0fb4',
  },
  inputContainer:{
    borderBottomWidth:1,
    marginVertical:16,
    marginHorizontal:(Screen.width/100)*10,
    borderColor:'#b7b7b7',
    height:30,
  }
});

module.exports = StartPage;