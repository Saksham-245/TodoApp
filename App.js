/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Alert,
  Button,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EditBox from './components/EditBox';

const App = () => {
  const [input, setInput] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const Add = () => {
    if (input === '') {
      Alert.alert('Empty', 'It can not be empty', ['Okay']);
    } else {
      const newTodo = [...todos, {id: todos.length + 1, todo: input}];
      setTodos(newTodo);
      setInput('');
      Keyboard.dismiss();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editBox}>
        <EditBox edit={input => setInput(input)} value={input} />
      </View>
      <View style={styles.button}>
        <Button title="Add" onPress={Add} />
      </View>
      <View style={styles.list}>
        <ScrollView>
          {todos.map(todo => {
            return (
              <Text key={todo.id} style={styles.listTitles}>
                {todo.todo}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  editBox: {
    marginTop: 20,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 25,
  },
  button: {
    marginHorizontal: 50,
    marginTop: 15,
  },
  list: {
    marginTop: 10,
  },
  listTitles: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default App;
