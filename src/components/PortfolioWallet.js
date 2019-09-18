import React , {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Wallet = () => {
  return(
    <View style = {styles.container}>
       <View style = {{ marginLeft:18 , alignSelf:'center'}}>
          <Text style = {{fontSize:14,color:'#677189'}}>WALLET</Text>
          <Text style = {{fontSize:16,color:'#d4c296'}}>Zeptacoins</Text>
       </View>

      <View style = {{ marginLeft:150 , alignSelf:'center'}}>
        <View style = {styles.rectStyle}>
            <Text style={{color:'#000',fontWeight:'700',fontSize:16}}> 3000 </Text>
        </View>
      </View>      
     </View>
  );
}


const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#0e0f13',flexDirection:'row',justifyContent:'space-between'},
    rectStyle: {
        width:200,
        height:40,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:50,
        backgroundColor:'#677189',
        borderRadius:20,
        borderWidth: 1
      },
  });


export default Wallet;