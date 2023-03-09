import React from "react";
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View } from 'react-native';
import Mobila from "C:/Users/Lenovo/Desktop/Licenta/features/mobilier/Mobilier-info.component.js";
export const MobilaScreen = () => {
    return (
        <View style={styles.screen}> 
             <Mobila></Mobila> 
            
        </View>
    )


}

const styles = StyleSheet.create({
    Text:{
        
        fontSize:20,
        top:200,
        left:50,
    },
    screen:{
        flex:1,
      

        
      },
})