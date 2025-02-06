// criarCards.tsx
import { View, Text, Pressable, FlatList } from 'react-native';
import Libs from '../utils/libs/libs';
const { useState, Ionicons, Card } = Libs;

type CriarCardsProps = {
  criarNovoCard?: () => void;
}

export default function CriarCards({criarNovoCard}: CriarCardsProps) {

  return (
    <View className="flex flex-row w-full h-auto justify-between items-center border mt-9 p-4 rounded-lg ">
      <Text className="text-2xl flex-1">Today's tasks</Text>

      <Pressable onPress={criarNovoCard}>
        <Ionicons name="add-circle" size={45} color="black" />
      </Pressable>
    </View>
  );
}
