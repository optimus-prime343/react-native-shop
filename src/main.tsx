import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'

import { NativeStackRoutes } from '~routes/native-stack-routes'
import { nativeBaseTheme, reactNavigationTheme } from '~themes'

export const Main = () => {
  const [client] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer theme={reactNavigationTheme}>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <NativeStackRoutes />
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
