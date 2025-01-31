import { View, Text, Pressable } from 'react-native';
import Libs from '../utils/libs/libs';
const { PaperProvider, withTheme, Constants, Ionicons } = Libs;

const statusBarHeight = Constants.statusBarHeight;

export default function Header() {

  return (
    <View className="flex flex-row w-full h-auto justify-between items-center">
        <Text
          className="w-60 text-3xl"
        >
          Hey, Welcome
        </Text>

        <Pressable className="w-18 h-18 bg-white rounded-full justify-center items-center">
          <Ionicons name="menu" size={45} color="#000" />
        </Pressable>
    </View>
  );
}
