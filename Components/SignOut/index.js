import { Button  } from 'react-native-paper';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { View, Text } from 'react-native';
import React from 'react'

const SignOutButton = () => {
    const { signOut } = useAuthenticator();
  return (       
         <Button onPress={signOut} title="Sign Out" >signOut</Button>
  )
}

export default SignOutButton