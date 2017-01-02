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

let Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window'),
    back_icon = require('image!back_icon'),
    NavigationBar = require('react-native-navbar');

class ResetPassword extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
    }
  }
  submit(){
    console.log('inside log in')
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
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff'}}>Reset Password</Text>
          </View>
          <View style={{alignItems:'center',justifyContent:'center', marginTop:(Screen.height/100)*2}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'rgba(255,255,255,.9)'}}>Enter your email below to reset your password</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:18,fontWeight:'600'}}>Email</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff'}}
              onChangeText={(email) => context.setState({email})}
            />
          </View>
          <TouchableOpacity onPress={()=>context.submit()} style={{marginTop:(Screen.height/100)*15,alignItems:'center',justifyContent:'center',marginVertical:10,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:18}}>SUBMIT</Text>
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

module.exports = ResetPassword;