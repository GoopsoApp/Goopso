import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  DatePickerIOS,
  TextInput
} from 'react-native';

let logo = require('image!logo'),
    Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window'),
    back_icon = require('image!back_icon'),
    NavigationBar = require('react-native-navbar');

class EnterDateOfBirth extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      date: new Date(),
      datePickerMode: 'hidden'
    }
  }
  toggleDatePicker(){
    var mode = this.state.datePickerMode == 'hidden' ? 'visible' : 'hidden';
    this.setState( { datePickerMode: mode } );
  }
  onDateChange( date ){
    this.setState( { date: date } );
  }
  continue(){
    let context = this;
    context.props.navigator.push({
      component:require('./EnterUsername')
    })
  }
  render() {
    let context = this;
    var datePicker = (
      <View style={ styles.datePicker }>
        <TouchableOpacity onPress={ () => {context.toggleDatePicker()} } style={{ padding: 5, alignItems: 'flex-end' }}>
          <Text>Done</Text>
        </TouchableOpacity>
        <DatePickerIOS
          date={context.state.date}
          mode="date"
          maximumDate={new Date()}
          onDateChange={ context.onDateChange.bind(context) } />
      </View>
    );
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
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff'}}>Enter your DOB</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:18,fontWeight:'600'}}>BIRTHDAY</Text>
          </View>
          <TouchableOpacity onPress={ context.toggleDatePicker.bind(context) }>
            <View style={ styles.inputContainer }>
              <Text style={{fontSize:16,color:'#ffffff',textAlign:'center'}}>{ context.state.date.getDate() }/{ context.state.date.getMonth()+1 }/{ context.state.date.getFullYear() }</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>context.continue()} style={{alignItems:'center',justifyContent:'center',marginTop:(Screen.height/100)*15,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:18}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        { context.state.datePickerMode == 'visible' ? datePicker : <View/> }
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
  },
  datePicker: {
   borderTopWidth: 1,
   position: 'absolute',
   bottom: 0,
   right: 0,
   left: 0,
   height: 220,
   borderColor: '#CCC',
   backgroundColor: '#FFF',
  },
});

module.exports = EnterDateOfBirth;