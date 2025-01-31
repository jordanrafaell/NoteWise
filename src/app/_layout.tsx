import { View } from 'react-native';
import '../styles/global.css'
import { Slot } from "expo-router";
import Libs from '../utils/libs/libs';
const { PaperProvider, withTheme } = Libs;


export default function RootLayout() {
  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <Slot/>
      </View>
    </PaperProvider>
  )
}
