import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

interface ChildSearch {
  search: string;
  setSearch: (text: string) => void
}


const Search: React.FC<ChildSearch> = ({search, setSearch}) => {
    
  return (
    <View style={styles.searchWrapper}>
        <TextInput 
            style={styles.searchBox}
            value={search}
            onChangeText={(userInput) => setSearch(userInput)}
            placeholder='Search for movies'

        />
        <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchTxt}>Search</Text>
        </TouchableOpacity>
      
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
      width:'70%',
      padding:10,
      backgroundColor:'white'

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