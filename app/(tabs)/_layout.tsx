import {Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
export default function TabsLayout(){
    return(
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor:'gray'
        }}
        >
            <Tabs.Screen name="index" options={{title: 'Home', tabBarIcon:({color,size})=>(
                <Ionicons name="home" size={size} color={color} />
            )}}/>
            <Tabs.Screen name="transactions" options={{title: 'Transactions', tabBarIcon:({color,size})=>(
                <Ionicons name="swap-horizontal" size={size} color={color} />)}}/>

            <Tabs.Screen name="profile" options={{title: 'Profile', tabBarIcon:({color,size})=>(
                <Ionicons name="person" size={size} color={color} />)}}/>
                <Tabs.Screen name="budgets" options={{title:'Budget',tabBarIcon:({color,size})=>(
                    <Ionicons name="wallet"
                    size={size}
                    color={color}
                     />
                )}}/>
        </Tabs>
    )
}