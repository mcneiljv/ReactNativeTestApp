import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GoalInput, GoalItem } from './components';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  function removeGoalHandler(id) {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                onRemoveGoal={removeGoalHandler}
                text={itemData.item.text}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
