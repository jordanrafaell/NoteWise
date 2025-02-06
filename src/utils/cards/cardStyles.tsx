//cardStyles.tsx
import { View, Text, Pressable } from 'react-native';
import Libs from '../../utils/libs/libs';
const { PaperProvider, withTheme, Constants, Ionicons } = Libs;

type CardStylesProps = {
  title: string;
};

export default function CardStyles({ title }: CardStylesProps) {
  return (
    <View className="flex justify-center items-center border mt-5 w-full h-auto p-10 rounded-lg">
      <View className="flex flex-row justify-between w-full h-auto pb-5">
        <Text className="flex-1 text-2xl relative bottom-7 right-5">
          {title}
        </Text>
      </View>
    </View>
  );
}
