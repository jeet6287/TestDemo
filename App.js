import React, {Component}  from 'react';
import {StyleSheet,StatusBar,View,Text} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFile1 from 'react-native-vector-icons/Ionicons';
import IconFile2 from 'react-native-vector-icons/Feather';
import Portfolio from './src/components/Portfolio';

 
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class App extends Component{
  render(){
    return(
      <View style = {{flex:1}}>
        <MyStatusBar backgroundColor="#000" barStyle="light-content" />
          <View style = {{flex:9}}><Portfolio/></View>
          {this._renderBottomNavigationButtons()}
        </View>
    );
  }

  _renderBottomNavigationButtons(){
    return (
      <View style = {styles.bottomBox}>
         <View style = {styles.iconBox}>
            <Icon name = "home" size = {28} />
         </View>
         <View style = {styles.iconBox}>
         <IconFile1 name = "ios-trending-up"  size = {28} />
      </View>
      <View style = {styles.iconBox}>
         <View style = {styles.button}> 
              <Text style = {styles.textStyle}>PORTFOLIO</Text>
           </View>
      </View>
      <View style = {styles.iconBox}>
         <IconFile2 name = "user" size = {28} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: getStatusBarHeight(),
  },
  bottomBox:{flex:1,backgroundColor:'#d4c296',flexDirection:'row',padding:5,justifyContent:'space-around'},
  iconBox:{flex:1,alignItems:'center',alignSelf:'center'},
  button:{padding:15,borderRadius:20,backgroundColor:"#000"},
  textStyle: {fontSize:10,color:'#d4c296'}
});

export default App;