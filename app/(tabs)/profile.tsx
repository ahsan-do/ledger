import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRIMARY } from '@/src/constants/colors'


const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:PRIMARY}}>Ledger - Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})