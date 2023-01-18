import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/components/Home';
import { Favorites } from './src/components/Favorites';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Favorites' component={Favorites}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// });
