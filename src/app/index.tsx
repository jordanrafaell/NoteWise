import { Text, View, ScrollView } from 'react-native';
import Header from '../pages/Header';
import Libs from '../utils/libs/libs';
import Pesquisa from '../pages/pesquisa';
const {Constants} = Libs

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView
      className="bg-slate-200"
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ flex: 1, marginTop: statusBarHeight }}>
        <Header />
        <Pesquisa/>
      </View>
    </ScrollView>
  );
}
