import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useTheme } from '../theme/useTheme';

type Props = {
  title: string;
  onAddPress?: () => void; // ✅ добавили
};

export function Header({ title, onAddPress }: Props) {
  const colors = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.surface }]}>
      <Text style={[styles.titleText, { color: colors.text }]}>{title}</Text>

      {onAddPress ? (
        <Pressable
          onPress={onAddPress}
          style={({ pressed }) => [
            styles.addButton,
            { backgroundColor: colors.background, opacity: pressed ? 0.7 : 1 },
          ]}
          hitSlop={10}
        >
          <Text style={[styles.addText, { color: colors.primary }]}>＋</Text>
        </Pressable>
      ) : (
        // чтобы title не прыгал если на других экранах кнопки нет
        <View style={{ width: 40, height: 40 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
    padding: 16,
    width: '100%',
  },

  titleText: {
    fontSize: 24,
    fontWeight: '500',
  },

  addButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addText: {
    fontSize: 26,
    lineHeight: 26,
    fontWeight: '600',
  },
});
