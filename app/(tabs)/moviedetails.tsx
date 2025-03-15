import { StyleSheet, Text, View, ScrollView } from 'react-native'
// import React from 'react';
import React, { useState } from 'react';
import Search from '@/components/Search'

const moviedetails: React.FC = () => {
  return (
    <ScrollView style={styles.moviedetailWrapper}>
       <Search />
    </ScrollView>
  )
}

export default moviedetails

const styles = StyleSheet.create({
  moviedetailWrapper:{
    // backgroundColor:'black',
    padding:25
  }
})