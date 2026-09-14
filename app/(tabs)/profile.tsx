import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRIMARY } from '@/src/constants/colors'
import { Avatar } from '@/src/components/Avatar'
import { Badge } from '@/src/components/Badge'
import { Card } from '@/src/components/Card'
import { useAuthStore } from '@/src/hooks/AuthContext'
import { Button } from '@/src/components/Button'


const Profile = () => {
  const logout = useAuthStore((state) => state.logout);
   const handleSignOut = () => {
    logout();
  };
  return (
    <View>
      <Text style={{color:PRIMARY}}>Ledger - Profile</Text>
      <Avatar initials='AN' size={40} />
      <Badge label='waiting' variant='secondary'/>
      <Card>
  <Card.Header>
    <Text className="text-title font-bold text-text-light dark:text-text-dark">Groceries</Text>
  </Card.Header>
  <Card.Body>
    <Text className="text-text-light dark:text-text-dark">-$45.20 · Sept 8</Text>
  </Card.Body>
  <Card.Footer>
    <Badge label="Completed" variant="success" />
  </Card.Footer>
</Card>
<Button label='logout' onPress={handleSignOut}/>
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