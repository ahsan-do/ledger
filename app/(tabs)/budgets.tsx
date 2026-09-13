import {  Text, View } from 'react-native'
import React, {useState} from 'react'
import { Input } from '@/src/components/Input';
import { Button } from '@/src/components/Button';

const budgets = () => {
 const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 justify-center p-lg bg-background-light dark:bg-background-dark">
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={email.length > 0 && !email.includes('@') ? 'Enter a valid email' : undefined}
      />

      <Button label="Primary" variant="primary" onPress={() => {}} />
      <Button label="Secondary" variant="secondary" onPress={() => {}} />
      <Button label="Ghost" variant="ghost" onPress={() => {}} />
      <Button label="Loading..." loading={loading} onPress={() => setLoading(!loading)} />
    </View>
  );
}

export default budgets

