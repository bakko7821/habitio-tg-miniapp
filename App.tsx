import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useTheme } from './src/theme/useTheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';                 // ✅
import { initDb } from './src/storage/db';        // ✅

import ReadingNowScreen from './src/screens/ReadingNowScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import ChartsScreen from './src/screens/ChartsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ReadingLaterScreen from './src/screens/ReadLaterScreen';
import ReaderScreen from './src/screens/ReaderScreen';

export type RootStackParamList = {
  ReadingNow: undefined;
  ReadingLater: undefined;
  Charts: undefined;
  Favorites: undefined;
  Library: undefined;
  Reader: { bookId: string };
};

export default function App() {
  const Stack = createNativeStackNavigator();
  const colors = useTheme();
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    initDb(); // ✅ создаёт таблицы
  }, []);

  return (
    <View style={[styles.body, { width, height, backgroundColor: colors.background }]}>
      <StatusBar style={'auto'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.background },
            animation: 'fade',
            animationDuration: 300,
          }}
        >
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Reader" component={ReaderScreen} />
          <Stack.Screen name="ReadingLater" component={ReadingLaterScreen} />
          <Stack.Screen name="Library" component={LibraryScreen} />
          <Stack.Screen name="ReadingNow" component={ReadingNowScreen} />
          <Stack.Screen name="Charts" component={ChartsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 40,
    padding: 0,
    flex: 1,
  },
});
