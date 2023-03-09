import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View } from 'react-native';
function ButonAutentificare({ navigation }) {
  navigation = useNavigation();

  return (
    <View>
        <View>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Autentificare')}}>
	<Text style={{ color: 'black' }}>Nu aveti inca un cont?Inregistrati-va acum!</Text>
      </TouchableOpacity>
    </View>

    

    </View>
  );
}

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
   },})

export default ButonAutentificare




