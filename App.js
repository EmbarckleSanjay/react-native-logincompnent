/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StatusBar,
  ScrollView
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTitle from './screens/home/title';
import HomeScreen from './screens/home';
import DateRange from './screens/home/dateRange'
import login from './landing/LandingPage'

// options={{ headerShown: false, title: null }} 
const App = () => {


  const Stack = createStackNavigator();

  return ( // Redux: Global Store
    <>
   
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
        
          <Stack.Navigator>
        
          <Stack.Screen
          name="LOG"
          component={DateRange}
          options={{ title: 'home' }}/>
           <Stack.Screen
          name="hai"
          component={login}
          options={{ title: 'welcome' }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: props => <HomeTitle {...props} /> }} />
          </Stack.Navigator>
         
        </NavigationContainer>
      
      </Provider>
    
     
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
