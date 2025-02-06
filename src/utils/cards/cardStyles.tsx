//cardStyles.tsx
import { View, Text, Pressable } from 'react-native';
import Libs from '../../utils/libs/libs';
const { PaperProvider, withTheme, Constants, Ionicons } = Libs;

type CardStylesProps = {
  title: string;
  onDelete: () => void; // função para deletar o card
};

export default function CardStyles({ title, onDelete }: CardStylesProps) {
  return (
    <View className="flex justify-center items-center border mt-5 w-full h-auto p-10 rounded-lg">
      <View className="flex flex-row justify-between w-full h-auto pb-5">
        <Text className="flex-1 text-2xl relative bottom-7 right-5">
          {title}
        </Text>
        <Pressable className="relative bottom-8 left-5" onPress={onDelete}>
          <Ionicons
            name="trash-outline"
            size={32}
            color="black"
            className="rounded-full p-1"
          />
        </Pressable>
      </View>
    </View>
  );
}
