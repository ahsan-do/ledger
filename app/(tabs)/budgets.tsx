import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const budgets = () => {
  return (
    <View style={styles.container}>
      <Text>budgets</Text>
    </View>
  )
}

export default budgets

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})