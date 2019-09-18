import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import pItems from '../portfolio.json';


import Header from './common/Header';
import PorfolioDetails from './PorfolioDetails';
import Wallet from './PortfolioWallet';


class Portfolio extends Component {
   constructor(props){
    super(props);
      this.state = {
         openPicker:false,
       }
    }

    setOpenList = () => {
      let {openPicker} = this.state;
      openPicker ? this.setState({openPicker:false}) : this.setState({openPicker:true});
    }

    renderLists(){
        return pItems.map((portfolio,index) =>
              <PorfolioDetails key = {index} data = {portfolio}/> 
        );
    }

    renderPagePicker(){
 
    }

    render(){
        return(
          <View style = {styles.ViewStyle}>
            <View style = {{flex:1}}>
                <Header headerText = {"PORTFOLIO"} onPress = {this.setOpenList}/>
                <View style = {{height:2,width:'100%',backgroundColor:'#fed655'}}/>
            </View>

            <View style = {{flex:8}}>
              <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {{backgroundColor:'#000',marginTop:8,width:'100%',alignSelf:'center'}}>
                 {this.renderLists()}
                </View>
              </ScrollView>
            </View>
            <Wallet/>
          </View>
        );
    }
}





const styles = StyleSheet.create({
    ViewStyle:{
        flex:1,
        backgroundColor:"#000",
    },
    listViewStyle:{
      flex:8,
      backgroundColor:"#fff",
    },
    walletBarstyle:{
        flex:1,
        backgroundColor:"#a39b86",
    },
    bottomBarstyle:{
        flex:1,
        backgroundColor:"#faefd2",
    }
  });

export default Portfolio;