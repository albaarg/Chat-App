import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { EditNameProps } from '../interfaces/types';
import { styles } from './styles';

const EditName = ({displayName, onSubmit}: EditNameProps) => {
  const [newDisplayName, setNewDisplayName] = React.useState(displayName);

  const submitButton = () => {
    onSubmit(newDisplayName);
  };

  return (
    <View style={styles.editNameBox}>
      <View
        style={styles.boxInput}>
        <TextInput
          placeholder="Name"
          defaultValue={displayName}
          onChangeText={setNewDisplayName}
        />
      </View>
      <View
        style={styles.boxButton}>
        <TouchableOpacity
          onPress={() => {
            submitButton();
          }}
          style={styles.pressableSave}>
          <Text style={styles.textSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditName;
