import {create} from 'zustand'
import * as SecureStore from 'expo-secure-store'

type User = {
    id: string
    email: string
} | null

type AuthState ={
    user : User,
    isLoggedIn: boolean,
    isHydrated: boolean,
    login: (user: User) => Promise<void>
    logout: () => Promise<void>
    hydrate: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoggedIn: false,
    isHydrated: false,
    login: async (user) => {
        await SecureStore.setItemAsync('user', JSON.stringify(user))
        set({user, isLoggedIn: true})
    },
    logout: async () =>{
        await SecureStore.deleteItemAsync('user')
        set({user: null, isLoggedIn: false})},
    hydrate: async () => {
        const stored = await SecureStore.getItemAsync('user')
        if(stored){
            set({user: JSON.parse(stored), isLoggedIn: true})
        }
        set({isHydrated:true})
    }
}))