import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import BurgaoHumilde from './src/screens/home/index';
import Interna from './src/screens/Interna/index';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Entypo';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#232227'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BurgaoHumilde}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Interna"
            component={Interna}
            options={{
              headerRight: () => (
                <TouchableOpacity style={{marginRight: 12}}>
                  <Icon name="dots-three-vertical" size={24} color="#fff" />
                </TouchableOpacity>
              ),
              headerTintColor: '#fff',
              headerTitle: '',
              headerStyle: {
                backgroundColor: '#232227',
                elevation: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
