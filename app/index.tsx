import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { router, Href } from 'expo-router';

const index = () => {
  return (
    <View style={styles.movieHomeWrapper}>
      <Text style={styles.welcome}>Welcome to MovieApp </Text>
      <TouchableOpacity style={styles.getStarted} onPress={() => router.push('/(tabs)/home' as Href)}>
        <Text style={styles.getStartedTxt}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    movieHomeWrapper:{
        width:'100%',
        flex:1,
        backgroundColor:'black',
        // flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        fontWeight:900,
        paddingVertical:20,
        padding:5
    },
    welcome:{
        fontSize:30,
        marginVertical:5,
        color:'white'
    },
    getStarted:{
        width: 200,
        padding:15,
        alignItems:'center',
        backgroundColor: '#550410',
        borderRadius:10,
        cursor:'pointer',
        marginVertical:15
        
    },
    getStartedTxt:{
        color:'white'
    }
})