import React from "react";
import { TouchableOpacity ,Text,Button ,StyleSheet, Image, TextInput, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import star from 'C:/Users/Lenovo/Desktop/Licenta/assets/star.js';

export default function Mobila  ( {navigation ,mobilier = {}})  {
    const {name= 'Mobila',
     photo="https://static.biano.cz/i/product/285-285/b5/44/c0/4ef133ea463b02f8c1acf9e14fc33af269ae6ea6-3067629-vidaxl-7dilny-set-kuchynskych-skrinek-cerny-vysoky-lesk-drevotriska.jpg", 
     onstock = true, 
     address= "100 random street",
     rating=4,
     pret=40.00} = mobilier

    const ratingArray=Array.from(new Array(Math.floor(rating)))
   
    const handlePress = () => {
      navigation.navigate('Anunt');
    };
    const count = 42;
    return(
        <View style={styles.screen}>
            
            <View style={styles.container}>
      <Card key={name}  style={styles.card}>
        <Card.Content>
        <Card.Cover source={{ uri: photo }} />
          <Title >{name}</Title>
          <View style={styles.stilViewStele}>
            <Text style={styles.stilTextStele}>Rating:</Text>
          {ratingArray.map( () => (<SvgXml style={styles.stilstele} xml={star}></SvgXml>))}
          </View>
          <Paragraph>
            Pret:${pret}
          </Paragraph>
          
        

          <Paragraph>
            Adresa:{address}
          </Paragraph>
         
          
 
        </Card.Content>
        <Card.Actions>
        <TouchableOpacity style={styles.butonlogin} onPress={()=>navigation.navigate('Anunt')}>
	<Text style={{color:'white'}}>Logare! </Text>
</TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
    
            </View>
    )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:20
    },
    stiltext:{
        position:"absolute",
        fontSize:20,
        
        left:40,
    },
    container: {
      flex: 1,
   
      alignItems: 'center',
      justifyContent: 'center',
  
      
     
    },
    card:{
      marginTop:16,
      height:400,
  padding: 2,
 width: 300,
alignitems: "center",
shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 4
  }
    },
    stilstele:{
        width:20,
        height:20
    },
    stilViewStele:{
        flexDirection:"row"
    },
    butonlogin:{
		  
		  bottom:138,
		  height:45,
		  left:0,
		  right:43.703,
		  top:2,
		  width:300,
		  backgroundColor: 'black',
		  borderRadius: 50,
		  alignItems: 'center', 
		  justifyContent: 'center',
		  
				
	  },
    stilTextStele:{
        top:-2
    }

})

