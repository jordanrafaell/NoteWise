// index.tsx pagina principal
import React, { useState } from 'react';
import Libs from '../utils/libs/libs';
const { Constants, NavigationContainer, createStackNavigator } = Libs;
import Pesquisa from '../pages/pesquisa';
import { View, FlatList } from 'react-native';
import Header from '../pages/Header';
import CriarCards from '../pages/criarCards';
import CardStyles from '../utils/cards/cardStyles';

const statusBarHeight = Constants.statusBarHeight;

const Stack = createStackNavigator(); // Criando o StackNavigator

function Index() {
  // função para armazenar os novos cardsText
  const [cards, setCards] = useState<{ id: string; title: string }[]>([]);

  function criarNovoCard(): void {
    const novoTitulo = `Title ${cards.length + 1}`;
    const novoCard = { id: novoTitulo, title: novoTitulo };

    setCards((prevCards) => [...prevCards, novoCard]);
  }

  return (
    <View className="flex-1">
      <Header />
      <Pesquisa />
      <CriarCards criarNovoCard={criarNovoCard} />

      {/*Lista de cards*/}
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardStyles title={item.title} />}
      />
    </View>
  );
}

export default Index;
