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

class EnterFnameLname extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:''
    }
  }
  continue(){
    let context = this;
    if(context.state.firstName == '' && context.state.lastName == ''){
      alert('Please enter the details')
    }
    else if(context.state.firstName == ''){
      alert('Please enter your first name')
    }
    else if(context.state.lastName == ''){
      alert('Please enter your last name')
    }
    else{
      context.props.navigator.push({
        component: require('./EnterDateOfBirth')
      })
    }
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
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff'}}>Enter your name</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:18,fontWeight:'600'}}>First Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff'}}
              onChangeText={(firstName) => context.setState({firstName})}
            />
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,}}>
            <Text style={{color:'#b7b7b7',fontSize:18,fontWeight:'600'}}>Last Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff'}}
              onChangeText={(lastName) => context.setState({lastName})}
            />
          </View>
          <View style={{alignItems:'center',marginVertical:10}}>
            <Text style={{color:'#b7b7b7',fontSize:16}}>By tapping Sign Up, you agree to the</Text><View style={{flexDirection:'row'}}><TouchableOpacity><Text style={{color:'#ffffff',fontSize:16}}> Terms of Service </Text></TouchableOpacity><Text style={{color:'#b7b7b7',fontSize:16}}>and</Text><TouchableOpacity><Text style={{color:'#ffffff',fontSize:16}}> Privacy Policy</Text></TouchableOpacity></View>
          </View>
          <TouchableOpacity onPress={()=>context.continue()} style={{alignItems:'center',justifyContent:'center',marginTop:(Screen.height/100)*15,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:18}}>CONTINUE</Text>
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

module.exports = EnterFnameLname;