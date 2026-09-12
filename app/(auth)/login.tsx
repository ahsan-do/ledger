import { useAuthStore } from '@/src/hooks/AuthContext'
import { Pressable, StyleSheet, Text, View } from 'react-native'



const Login = () => {
  const login = useAuthStore((state)=> state.login)
  const handleLogin = ():void => {
    login({id: '1', email:'test@test.com'})
  }
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Pressable onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})