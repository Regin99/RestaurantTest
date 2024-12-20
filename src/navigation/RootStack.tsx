import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useState} from 'react';

import {RootStackParamList} from './types';

import {SplashScreen} from '../screens/SplashScreen';
import {MainNavigator} from './MainNavigator';

export const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : <MainNavigator />}
    </NavigationContainer>
  );
};
