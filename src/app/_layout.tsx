// _layout.tsx
import { View } from 'react-native';
import '../styles/global.css'
import Libs from '../utils/libs/libs';
const { PaperProvider, withTheme, Slot } = Libs;


export default function RootLayout() {
  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>/
        <Slot/>
      </View>
    </PaperProvider>
  )
}
