import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Text, View } from "react-native";


const Autentificare = () =>{
    return (
       

<View  style={styles.screen}> 
<TextInput style={styles.stilentry}  value="Introduceti Parola">
</TextInput>

<TextInput style={styles.stilentryconfirmare}  value="Confirmati Parola">
</TextInput>

<TextInput style={styles.stilentryuser}  value="Introduceti Numele">
</TextInput>

<TextInput style={styles.stilentryemail}  value="Introduceti Mail">
</TextInput>
<Image fadeDuration={20000} style={styles.imagine} resizeMode="cover" source={require('C:/Users/Lenovo/Desktop/Licenta/1.png')}></Image> 
<TouchableOpacity style={styles.butoncreate} onPress={()=>{}}>
	<Text style={{color:'white'}}>Creaza cont! </Text>
</TouchableOpacity>

		</View>

    )
}

const styles= StyleSheet.create({
    butoncreate:{
        position:'absolute',
        bottom:138,
        height:45,
        left:55,
        right:143.703,
        top:640,
        width:300,
        backgroundColor: 'black',
        borderRadius: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        
              
    },
    stilentry:{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 10,
        position:"absolute",
        bottom:378,
        height:46,
        left:30,
       top:440,
        right:79,
        width:350,
       alignItems: 'center', 
       justifyContent: 'center',
       borderRadius: 50,
       textAlign: 'center',

   },

   stilentryconfirmare:{
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    position:"absolute",
    bottom:378,
    height:46,
    left:30,
   top:510,
    right:79,
    width:350,
   alignItems: 'center', 
   justifyContent: 'center',
   borderRadius: 50,
   textAlign: 'center',

},
stilentryemail:{
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    position:"absolute",
    bottom:378,
    height:46,
    left:30,
   top:300,
    right:79,
    width:350,
   alignItems: 'center', 
   justifyContent: 'center',
   borderRadius: 50,
   textAlign: 'center',

},

   stilentryuser:{
       backgroundColor: 'white',
       borderColor: 'black',
       borderWidth: 0.5,
       padding: 10,
       position:"absolute",
       bottom:378,
       height:46,
       left:30,
          top:370,
       right:79,
       width:350,
       textAlign: 'center',
         borderRadius: 50,
      

  },
  imagine:{
    widht:200,
    height:250,
    left:-45,
       top:-10,
},

screen:{
    flex:1,
    backgroundColor: 'white',
    
  },

}) 


export default Autentificare