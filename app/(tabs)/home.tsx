import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Search from '@/components/Search'

const home = () => {
  return (
    <ScrollView style={styles.movieWrapper}>
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