import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import {  useContext } from 'react';
import Search from '@/components/Search'
import { ThemeContext } from '@/model/ThemeContext';

const home = () => {

  const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext
  return (
    <ScrollView style={[styles.movieWrapper,
      {
          backgroundColor: isDarkMode ? '#121212' : '#FFF',
          
      }
    ]}>
      <Search />
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  movieWrapper:{
    padding:25
  }
})