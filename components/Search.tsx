import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';





const apiKey = 'c929301e'; // Replace with your actual API key
// const apiKey = 'a414207a';


const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const [movies, setMovies] = useState<{ imdbID: string; Title: string; Year: string; Type: string; Poster: string }[]>([])

 

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

  const getMovieDetails = (imdbID: string) => {
    setError(''); //Clear any previous errors
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
    .then((response) => response.json())
    .then((data) => {
      router.push({ pathname: '/moviedetails', params: { movie: JSON.stringify(data) } }) //movie: data, 'movie' can be anything
    })
    .catch(() => {
      setError("An error occured. Please try again."); //computer error from network error
  });
  }

  const getDefaultMovie = ()=>{

    const currentYear = new Date().getFullYear();

    setError(''); //Clear any previous errors

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=love&y=${currentYear}`)
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

  useEffect(() => {
    getDefaultMovie();
  }
  , []); //empty array means it will only run once when the component is mounted
    
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

       {/* OUTPUT THE MOVIES SEARCH */}
       <View style={styles.moviesContainer}>
        {movies.map((movie) => (
          <View key={movie.imdbID} style={styles.card}>

            {/* Movie Poster */}
            <Image
              source={{
                uri: movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150',
              }}
              style={styles.poster}
              resizeMode="cover"
            />

            {/* Movie Info */}
            <View style={styles.cardContent}>
              <Text style={styles.movieTitle}>{movie.Title}</Text>
              <Text style={styles.movieInfo}>Year: {movie.Year}</Text>
              <Text style={styles.movieInfo}>Type: {movie.Type}</Text>

              {/* View Details Button */}
              <TouchableOpacity style={styles.detailsButton} onPress={() => getMovieDetails(movie.imdbID)}>
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>

          </View>
        ))}
      </View>

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
    },
    moviesContainer: {
      padding: 10,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 15,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    poster: {
      width: 100,
      height: 150,
      borderRadius: 8,
    },
    cardContent: {
      flex: 1,
      marginLeft: 15,
    },
    movieTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    movieInfo: {
      fontSize: 14,
      color: '#555',
      marginBottom: 3,
    },
    detailsButton: {
      marginTop: 10,
      backgroundColor: '#550410',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 6,
      alignSelf: 'flex-start',
    },
    detailsButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },

})