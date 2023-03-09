import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Autentificare from './Autentificare';
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View } from 'react-native';
import Anunt from './Anunt';
import Cautare from './Cautare';

const Stack = createStackNavigator();

function App({ navigation }) {

  return (

    <View style={styles.screen} >
		
	<View > 

<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Autentificare')}>
	<Text style={{ color: 'black' }}>Nu aveti inca un cont?Inregistrati-va acum!</Text>
      </TouchableOpacity>
</View>

<View  > 
<TextInput style={styles.stilentry}  value="Introduceti Parola">
</TextInput>

<TextInput style={styles.stilentryuser} value="Introduceti Numele">
</TextInput>
<Image fadeDuration={2000} style={styles.imagine} resizeMode="cover" source={require('C:/Users/Lenovo/Desktop/Licenta/1.png')}></Image> 
<TouchableOpacity style={styles.butonlogin} onPress={()=>navigation.navigate('Cautare')}>
	<Text style={{color:'white'}}>Logare! </Text>
</TouchableOpacity>

		</View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Autentificare')}
      >
        <Text>Go to Autentificare</Text>
      </TouchableOpacity> */}
    </View>
  );
}

function AppContainer() {
  return (
	
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
		<Stack.Screen name="Cautare" component={Cautare} />
		<Stack.Screen name="Anunt" component={Anunt} />
	
        <Stack.Screen name="Autentificare" component={Autentificare} />
      </Stack.Navigator>
    </NavigationContainer>
	
  );
}

const styles = StyleSheet.create({
	screen:{
	  flex:1,
	  backgroundColor: 'white',
	  
	},
	button: {
	  position: 'absolute',
	  top: 650,
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
		  left:55,
		  right:143.703,
		  top:582,
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
		  top:450,
		   right:79,
		   width:350,
		  alignItems: 'center', 
		  justifyContent: 'center',
		  borderRadius: 50,
		  textAlign: 'center',
		  borderRadius: 50,
			shadowColor: 'black',
			shadowOffset: { width: 2, height: 2 },
			shadowOpacity: 0.5,
			shadowRadius: 60,
			elevation: 10,
			opacity: 5.8,
  
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
			shadowColor: 'black',
			shadowOffset: { width: 2, height: 2 },
			shadowOpacity: 0.5,
			shadowRadius: 60,
			elevation: 10,
			opacity: 5.8,
		
  
	 },
  
	 imagine:{
		  widht:200,
		  height:350,
		  left:-45,
			 top:-30,
	 }})
export default AppContainer;