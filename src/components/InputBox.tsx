import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import VectorImage from 'react-native-vector-image';
import { getMessages, sendMessage } from '../services/storage';
import { styles } from './styles';

interface MessagesProps {
  setMessages: React.Dispatch<
    React.SetStateAction<Array<{sender: string; content: string; time: string}>>
  >;
  contact: string;
}
const InputBox = ({setMessages, contact}: MessagesProps) => {
  const [message, setMessage] = React.useState<string>('');

  const newMessage = async () => {
    if (message) {
      await sendMessage(contact, {
        sender: '',
        content: message,
        time: 'now',
      });
      const updatedMessages = await getMessages(contact);
      setMessage('');
      setMessages(updatedMessages);
    }
  };

  return (
    <View style={styles.inputBox}>
      <View
        style={styles.inputStyles}>
        <TextInput
          placeholder="Message"
          style={styles.inputEditName}
          multiline
          value={message}
          onChangeText={setMessage}
        />
      </View>

      <View
        style={styles.buttonSendBox}>
       <TouchableOpacity onPress={() => newMessage()}>
          <VectorImage
            source={require('../../assets/send.svg')}
            style={{
              tintColor: '#2596be',
              width: 26,
              height: 26,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputBox;
