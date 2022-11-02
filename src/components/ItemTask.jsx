import React from 'react'
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native'
import HU from './HistoriaClinica';


const ItemTask = (props) => {
  return (
   <TouchableOpacity style={styles.cardView}onPress={()=>{
    navigation.navigate('HU') 
  }}title="HU">
       <View style={{flexDirection:'column'}}> 
     <Text style={{textTransform: 'uppercase', color:'#000003'}} >
        {props.Nombre} - {props.Dni}</Text>  
    </View>
   </TouchableOpacity>)
  };
  
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 30,
        padding: 30,
        shadowColor: "#000003",
        marginHorizontal:8,
        marginVertical:5,
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 9.75,
        shadowRadius: 3.84,
        elevation: 20
      }

});

export default ItemTask;