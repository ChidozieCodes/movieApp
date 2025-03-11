import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Tabs initialRouteName="home">
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="moviedetails"
        options={{
          headerShown: false,
          title: 'moviedetail',
          tabBarIcon: ({ color }) => <MaterialIcons name="movie" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'profile',
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color={color} />,
        }}
      />
    </Tabs>
  </SafeAreaView>

  );
}
