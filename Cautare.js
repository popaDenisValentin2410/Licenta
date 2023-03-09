
import React, { useState ,useContext} from 'react';
import { Searchbar} from 'react-native-paper';
import {FlatList, Button ,TouchableOpacity,StatusBar,Text,View,SafeAreaView,StyleSheet } from 'react-native';

import Mobila from "C:/Users/Lenovo/Desktop/Licenta/features/mobilier/Mobilier-info.component.js";

fetch('http://localhost:5000/insertuser', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    utilizator: 'John',
    parola: 'secret',
    mail: 'john@example.com'
  })
})
  .then(response => response.json())
  .then(data => console.log('Response from server:', data))
  .catch(error => console.error('Error:', error))

export default function Cautare({navigation}) {
    const [searchQuery, setSearchQuery] = useState('');
    const handlePress = () => {
      navigation.navigate('Autentificare');
    };
  
   const renderItem = ({ item }) => <Mobila name={item.name} photo={item.photo} onstock = {item.onstock} adress={item.address} rating={item.rating} pret={item.pret} />;
   const data = [
       { id:1,name: 'Arogant',photo:"https://static.biano.cz/i/product/285-285/b5/44/c0/4ef133ea463b02f8c1acf9e14fc33af269ae6ea6-3067629-vidaxl-7dilny-set-kuchynskych-skrinek-cerny-vysoky-lesk-drevotriska.jpg", onstock:true, adress:"strada", rating: 3,pret:10 },
       { id:2,name: 'Bistro',photo:"https://th.bing.com/th/id/R.667c960d5736f437c3b11cc454610388?rik=h7JEEbNKMv9zRg&riu=http%3a%2f%2fwww.casanuntilor.ro%2fgalerie_foto%2f1591%2frestaurante-locatii-nunti-timisoara-royal.jpg&ehk=HoRQS9ZWTicsk7r0LkREPXLOwn4QgltgGy76SmZnVU0%3d&risl=&pid=ImgRaw&r=0",onstock:true, adress:"strada", rating: 3,pret:10 },
       { id:3,name: 'Ibiza',photo:"https://static.biano.cz/i/product/285-285/b5/44/c0/4ef133ea463b02f8c1acf9e14fc33af269ae6ea6-3067629-vidaxl-7dilny-set-kuchynskych-skrinek-cerny-vysoky-lesk-drevotriska.jpg",onstock:true,adress:"strada",  rating: 3,pret:10 },
       { id:4,name: 'Da',photo:"https://static.biano.cz/i/product/285-285/b5/44/c0/4ef133ea463b02f8c1acf9e14fc33af269ae6ea6-3067629-vidaxl-7dilny-set-kuchynskych-skrinek-cerny-vysoky-lesk-drevotriska.jpg", onstock:true,adress:"strada", rating: 3,pret:10 },
   ];
  return (
    <SafeAreaView style={styles.screen}>
    <Searchbar
        style={styles.searchstyle}
      placeholder="Search"
      onChangeText={query => setSearchQuery(query)}
      value={searchQuery}

    />
     <View>
     <TouchableOpacity style={{top:2,left:10,width:100,height:100}} onPress={()=>navigation.navigate('Anunt')}>
	<Text style={{color:'black'}}>Logare! </Text>
</TouchableOpacity>
     <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
    </View>
   


    </SafeAreaView>
    
  );
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:20
    },
    searchstyle:{
        backgroundColor:'white',
        borderRadius: 30,
    }

})

