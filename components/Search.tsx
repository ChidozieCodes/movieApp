import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {API_KEY} from '@env';

const apiKey = process.env.API_KEY;



const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([])

  const searchMovie = () => {
    setError(''); //Clear any previous errors

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchWord}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.Response === 'True'){
        setMovies(data.Search) //update movies state with search results
      }else{
        setError(data.Error) //Show
      }
    })
    .catch(() => {
      setError("An error occured. Please try again."); //computer error from network error
    });
  }
    
  return (
    <View>
        <View style={styles.searchWrapper}>
        <TextInput 
            style={styles.searchBox}
            value={searchWord}
            onChangeText={(userInput) => setSearchWord(userInput)}
            placeholder='Search for movies'

        />
        <TouchableOpacity style={styles.searchBtn} onPress={searchMovie}>
            <Text style={styles.searchTxt}>Search</Text>
        </TouchableOpacity>
      
      </View>

       {/*Display error message if there is an error*/}
       {error && <Text style={{color:'red'}}>{error}</Text>}
    </View>
    
  )
}

export default Search

const styles = StyleSheet.create({
    searchWrapper:{
      width:'100%',
      flexDirection:'row'
    },
    searchBox:{
      width:'68%',
      padding:10,
      margin: '1%',
      backgroundColor:'white',
      borderRadius:10

    },
    searchBtn:{
      width:'28%',
      padding:15,
      margin: '1%',
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#550410',
      borderRadius:10
    },
    searchTxt:{
      color:'white',
      fontWeight: 'bold'
    }

})