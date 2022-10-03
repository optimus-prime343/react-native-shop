import { extendTheme } from 'native-base'

import { COLORS } from '~constants'

const nativeBaseTheme = extendTheme({
  colors: { primary: COLORS.primary },
})

export { nativeBaseTheme }
