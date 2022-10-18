import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ id, onRemoveGoal, text }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onRemoveGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalItemText: {
    color: '#fff',
    padding: 8
  }
});

export default GoalItem;
