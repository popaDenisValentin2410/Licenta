
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View } from 'react-native';
import Autentificare from './Autentificare';

export default function Log() {
  return (
    <View>
		  
  <View> 

<TouchableOpacity style={styles.button} onPress={()=>{Autentificare}}>
	<Text style={{ color: 'black' }}>Nu aveti inca un cont?Inregistrati-va acum!</Text>
      </TouchableOpacity>
</View>


<View>

	<TextInput style={styles.stilentry}  value="Introduceti Parola">
</TextInput>

<TextInput style={styles.stilentryuser}  value="Introduceti Numele">
</TextInput>
</View>


<View>

<Image fadeDuration={2000} style={styles.imagine} resizeMode="cover" source={require('C:/Users/Lenovo/Desktop/Licenta/1.png')}></Image>
<TouchableOpacity style={styles.butonlogin} onPress={()=>{}}>
	<Text style={{color:'white'}}>Logare! </Text>
</TouchableOpacity>

		</View>
		</View>
  )
};

function AppContainer() {
	return (
	  <NavigationContainer>
		<Stack.Navigator>
		  <Stack.Screen name="App" component={App} />
		  <Stack.Screen name="Autentificare" component={Autentificare} />
		</Stack.Navigator>
	  </NavigationContainer>
	);}



const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  button: {
	position: 'absolute',
    top: 700,
    left: 28,
    right: 143.703,
    bottom: 138,
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
	width:370.297,
	height:45,
 },

 	butonlogin:{
		position:'absolute',
		bottom:138,
		height:45,
		left:128,
		right:143.703,
		top:632,
		width:160.297,
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
		top:550,
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
	   	top:470,
		right:79,
		width:350,
		textAlign: 'center',
	  	borderRadius: 50,
	   

   },

   imagine:{
		widht:200,
		height:350,
		left:-45,
	   	top:70,
   }




 



});