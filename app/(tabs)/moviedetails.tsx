import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Define the type for Movie
type Movie = {
  Title: string;
  Year: string;
  Plot: string;
  Poster: string;
  Genre: string;
  Director: string;
  Actors: string;
  [key: string]: any; // Optional, allows for additional fields
};

const MovieDetails = () => {
  const { movie } = useLocalSearchParams<{ movie: string }>();

  // Parse the stringified movie data
  const movieData: Movie = JSON.parse(movie);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{movieData.Title}</Text>
      <Image
        source={{ uri: movieData.Poster !== 'N/A' ? movieData.Poster : 'https://via.placeholder.com/150' }}
        style={styles.poster}
      />
      <Text style={styles.text}>Year: {movieData.Year}</Text>
      <Text style={styles.text}>Genre: {movieData.Genre}</Text>
      <Text style={styles.text}>Director: {movieData.Director}</Text>
      <Text style={styles.text}>Actors: {movieData.Actors}</Text>
      <Text style={styles.plot}>{movieData.Plot}</Text>
    </ScrollView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginVertical: 5,
  },
  plot: {
    marginVertical: 10,
    textAlign: 'center',
  },
});
