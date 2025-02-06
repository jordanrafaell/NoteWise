// Header.tsx
import { View, Text, Pressable } from 'react-native';
import Libs from '../utils/libs/libs';
const { PaperProvider, withTheme, Constants, Ionicons } = Libs;

const statusBarHeight = Constants.statusBarHeight;

export default function Header() {

  return (
    <View className="flex flex-row w-full h-auto justify-between items-center relative top-5">
        <Text
          className="flex-1 text-3xl relative left-1"
        >
          Hey, Welcome
        </Text>

        <Pressable className="w-18 h-18 bg-white rounded-full justify-center items-center relative right-3">
          <Ionicons name="menu" size={45} color="#000" />
        </Pressable>
    </View>
  );
}
