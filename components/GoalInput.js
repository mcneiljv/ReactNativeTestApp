import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

function GoalInput({ onAddGoal, onCancel, visible }) {
  const [goalText, setGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(goalText);
    setGoalText('');
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your Goal'
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color='#4AE1FF' title='Add Goal' onPress={addGoalHandler} />
          </View>

          <View style={styles.button}>
            <Button color='#3F80EB' title='Cancel' onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#9A34EB'
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FF3DF4',
    backgroundColor: '#FF3DF4',
    color: '#3C29FF',
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});

export default GoalInput;
