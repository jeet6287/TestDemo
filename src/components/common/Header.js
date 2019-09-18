import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

class Header extends Component{
  constructor(props){
   super(props);
  }
  
  handlePress = () => {
    this.props.onPress();
  }

  render(){
    return (
      <View style = {styles.viewStyle}>
      <Text style = {styles.textStyle} >{this.props.headerText}</Text>
      <View style={{position: "absolute", alignSelf:'center', right:10, color:"#fff"}} >
        <TouchableOpacity onPress={this.handlePress}>
            <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <View style={styles.triangle}/>
            </View>
        </TouchableOpacity>  
      </View>
      </View>
   );
  }
};

const styles = StyleSheet.create({
  textStyle:{
    fontSize:16,
    color:'#ffb700', 
    fontWeight:'300'
  },
  viewStyle:{
    backgroundColor:"#000",
    justifyContent:'center',  
    flexDirection:'row',
    alignItems:'center',
    height:60,
  },
  triangle: {
    marginTop:5,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth:10,
    borderBottomColor: '#fff',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '180deg'}]
  }
});


export default Header;