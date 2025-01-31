import { View, Text } from 'react-native';

export default function Cards() {
 return (
   <View className="flex justify-center items-center border mt-5 w-full h-auto p-10 rounded-lg">
     <View className="flex flex-row justify-between w-full h-auto pb-5">
       <Text className="flex-1 text-2xl relative bottom-7 right-5">Titulo</Text>
     </View>
   </View>
 );
}