import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { GoalInput, GoalItem } from './components';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    closeModalHandler();
  }

  function removeGoalHandler(id) {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add Goal' color='#9A34EB' onPress={showModalHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        onCancel={closeModalHandler}
        visible={showModal}
      />
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
