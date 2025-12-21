import { View, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../theme/useTheme';
import {
  ChartIcon,
  FavoritesIcon,
  NoteIcon,
  OpenBookIcon,
  ReadLaterIcon,
} from '../icons/icons';
import {
  NavigationProp,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export function Navigate() {
  const colors = useTheme();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const currentRouteName = useNavigationState(
    state => state.routes[state.index].name
  ) as keyof RootStackParamList;

  const isActive = (routeName: keyof RootStackParamList) =>
    currentRouteName === routeName;

  const iconColor = (routeName: keyof RootStackParamList) =>
    isActive(routeName) ? colors.primary : colors.text;

  const buttonBg = (routeName: keyof RootStackParamList) =>
    isActive(routeName) ? colors.background : 'transparent';

  return (
    <View style={[styles.navigate, { backgroundColor: colors.surface }]}>
      <Pressable
        style={[styles.button, { backgroundColor: buttonBg('Favorites') }]}
        onPress={() => navigation.navigate('Favorites')}
      >
        <FavoritesIcon width={36} height={36} fill={iconColor('Favorites')} />
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: buttonBg('ReadingLater') }]}
        onPress={() => navigation.navigate('ReadingLater')}
      >
        <ReadLaterIcon width={36} height={36} fill={iconColor('ReadingLater')} />
      </Pressable>

      <Pressable
        style={[styles.mainButton, { backgroundColor: buttonBg('Library') }]}
        onPress={() => navigation.navigate('Library')}
      >
        <OpenBookIcon
          width={48}
          height={48}
          fill={iconColor('Library')}
        />
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: buttonBg('ReadingNow') }]}
        onPress={() => navigation.navigate('ReadingNow')}
      >
        <NoteIcon width={36} height={36} fill={iconColor('ReadingNow')} />
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: buttonBg('Charts') }]}
        onPress={() => navigation.navigate('Charts')}
      >
        <ChartIcon width={36} height={36} fill={iconColor('Charts')} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navigate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 10,
    padding: 8,
    width: '100%',
  },

  mainButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 16,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 12,
  },
});
