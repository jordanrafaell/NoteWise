import { View, Text, Pressable } from 'react-native';
import Libs from '../utils/libs/libs';
import { Ionicons } from '@expo/vector-icons';
const {} = Libs;

export default function CriarCards() {
  return (
    <View
      className="flex flex-row w-full h-auto justify-between items-center border mt-9 p-4 rounded-lg"
    >
      <Text className="text-2xl w-60">
        Today's tasks
      </Text>

      <Pressable className='w-30'>
        <Ionicons name="add-circle" size={45} color="black" />
      </Pressable>
    </View>
  );
}
