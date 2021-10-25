import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

function EditBox({edit, value}) {
  return (
    <View>
      <TextInput onChangeText={edit} value={value} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
});

export default EditBox;
