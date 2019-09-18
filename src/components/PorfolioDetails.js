import React,{Component} from 'react';
import {StyleSheet,View, Text , Image } from 'react-native';

class PorfolioDetails extends Component{
    render(){
        console.log("Data ",this.props.data);
        let {image,title,name,royalty,tokens,zc} =  this.props.data;
        return(
           <View style = {styles.cardStyle}>
               <Image 
                  style = {styles.imageStyle}
                  source = {{uri:image}}
               />
               <View style = {styles.textBoxStyle}> 
                  <View>
                    <Text style={styles.titleTextStyle}>{title}</Text>
                    <Text style={styles.nameTextStyle}>{name}</Text>
                  </View>
                  <View>
                    <Text style={styles.royaltyTextStyle}>ROYALTIES EARNED:${royalty}</Text>
                    <Text style={styles.tokenTextStyle}>TOKENS HELD: {tokens}</Text>
                  </View>
                </View>
                <View style = {styles.capsuleStyle}>
                   <Text style={{fontWeight:'600',color:"#000"}}> ZC:{zc} </Text>
                 </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
   cardStyle:{
     flex:1,
     flexDirection:'row',
     marginLeft:4,
     marginRight:4,
     marginTop:8,
     marginBottom:8,
     backgroundColor:'#000'
   },
   textBoxStyle:{
    marginLeft:8, 
    justifyContent: 'space-around',
   },
   imageStyle:{
     height:130,
     width:150,
     borderRadius:5
   },
   titleTextStyle:{
     color:'#596274',
     fontSize: 15,
     fontWeight: '700',
   },
   nameTextStyle:{
    color:'#596274',
    fontSize: 14,
    fontWeight: '400',
   },
   royaltyTextStyle:{
    color:'#fcd165',
    fontSize: 12,
    fontWeight: '400',
   },
   tokenTextStyle:{
    color:'#fff',
    fontSize: 12,
    fontWeight: '400',
   },
   capsuleStyle: {
    width:200,
    height:30,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:20,
    backgroundColor:'#d4c296',
    borderRadius:20,
    borderWidth: 1,
    alignSelf:'center',
    position:'absolute',
    right:-100,
  },
});

export default PorfolioDetails; 