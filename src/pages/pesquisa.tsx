import { View } from 'react-native';
import React, { useState } from 'react';
import Libs from '../utils/libs/libs';

const { Searchbar } = Libs;

export default function Pesquisa() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View className="w-full h-auto justify-center items-center pt-20">
      <Searchbar
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
        style={{
          backgroundColor: 'white',
          borderColor: '#000',
          borderWidth: 2, // Adiciona borda preta
        }}
        inputStyle={{ color: '#000' }}
        iconColor='#000'
        placeholderTextColor='#000'
      />
    </View>
  );
}
