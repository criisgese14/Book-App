import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BookDetail } from './src/components/BookDetail';
import { MyTab } from './src/components/MyTab';

const Stack = createStackNavigator();

export default function App() {



  return (   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MyTab' component={MyTab} options={{headerShown:false}}/>
        <Stack.Screen name='Detail' component={BookDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// });
