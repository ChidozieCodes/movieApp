import { StyleSheet, Text, View } from 'react-native'
// import React from 'react';
import React, { useState } from 'react';
import Search from '@/components/Search'

const moviedetails: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <View style={styles.moviedetailWrapper}>
        <Search search={search} setSearch={setSearch} />
    </View>
  )
}

export default moviedetails

const styles = StyleSheet.create({
  moviedetailWrapper:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    padding:15
  }
})