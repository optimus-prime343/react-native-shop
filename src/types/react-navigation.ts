import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
}
export type ScreenProps<TRouteKey extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, TRouteKey>
