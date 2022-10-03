import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from 'native-base'
import React from 'react'

import { HomeScreen } from '~screens/home-screen'
import { RootStackParamList } from '~types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const NativeStackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: () => <Icon name="menu" />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
