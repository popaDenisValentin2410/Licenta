import React from "react";
import { StatusBar,ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image, Text, View } from "react-native";


export default function Anunt () {
    
    return (
       


<SafeAreaView  style={styles.screen}> 


<Image style={styles.imagine} resizeMode="cover" source={require('C:/Users/Lenovo/Desktop/Licenta/mobila.png')}></Image> 
<Text style={styles.stilpret}>$50.00</Text>
<Text style={styles.stilprodus}>Set mobila de bucatarie</Text>
<Text style={styles.stilscrisdescriere}>Descriere</Text>
<Text style={styles.stildescriere}>Set mobila de bucatarie, ce poate fi folosita deasemenea in living-room, pentru a sta impreuna cu toata familia!</Text>

<TouchableOpacity style={styles.butonlogin} onPress={()=>navigation.navigate('Anunt')}>
	<Text style={{color:'white', fontSize:20,top:20, left:40}}>Adauga in cos </Text>
</TouchableOpacity>
<StatusBar style= "auto"> </StatusBar>
        </SafeAreaView>

    )
}

const styles= StyleSheet.create({

  

  imagine:{
    
    widht:200,
    height:350,
    left:-45,
    top:-30,
    borderRadius: 130,
    borderColor: 'black',
},

screen:{
    flex:1,
    backgroundColor: 'transparent',
    heigh:'100%',
    magrinTop:StatusBar.currentHeight,
    headerMode: 'none',
   
    
  },
stilpret:{
    left:20,
    top:-5,
    fontSize:30,
    color:'#8B7E66',
    fontWeight:'bold',

},


stilprodus:{
    left:20,
    top:5,
    fontSize:20,
    color:'black',
 

},

stilscrisdescriere:{
    left:20,
    top:150,
    fontSize:20,
    color:'black',
 

},

stildescriere:{
    left:20,
    top:170,
    fontSize:15,
    color:'#788199',
 

},

butonlogin:{
    position:'absolute',
    bottom:138,
    height:150,
    left:200,
    right:143.703,
    top:702,
    width:300,
    backgroundColor: '#8B7E66',
    borderRadius: 50,
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    
          
},


}) 


