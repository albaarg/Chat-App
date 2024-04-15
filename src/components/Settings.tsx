import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { styles } from './styles';
import { UserProps } from '../interfaces/types';
import VectorImage from 'react-native-vector-image';
import { launchImageLibrary } from 'react-native-image-picker';
import EditName from './EditName';
import { getImage, storeImage } from '../services/storage';

const Settings = ({item}: UserProps) => {
  const [name, setName] = React.useState<string>(item.name);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [imageUri, setImageUri] = React.useState<string | null>(null);

  const updateName = (newName: string) => {
    setName(newName);
    setIsModalVisible(false);
  };

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
        storeImage(item.name, response.assets[0].uri);
      }
    });
  };
  
  React.useEffect(() => {
    const updateImage = async () => {
      const storedImageUri = await getImage(item.name);
      if (storedImageUri) {
        setImageUri(storedImageUri);
      }
    };
  
    updateImage();
  }, []);

  return (
    <ScrollView style={styles.boxSettings}>
      <View
        style={styles.settingsBoxStyle}>
        <View style={styles.settingsBox}>
          <View
            style={styles.boxAvatar}>
               {imageUri ? (
              <Image
                source={{uri: imageUri}}
                style={styles.avatar}
              />
            ) : null}
            <View
              style={styles.boxButtonEdit}>
              <TouchableOpacity onPress={selectImage}>
                <VectorImage
                  source={require('../../assets/pencil.svg')}
                  style={{
                    tintColor: '#fff',
                    width: 22,
                    height: 22,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profileBox}>
        <View
          style={styles.accountBox}>
          <View style={styles.account}>
            <VectorImage
              source={require('../../assets/account.svg')}
              style={{
                tintColor: '#34434D',
                width: 22,
                height: 22,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={styles.title}>Name</Text>
              <Text style={styles.userInformation}>{name}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <VectorImage
              source={require('../../assets/pencil.svg')}
              style={{
                tintColor: '#34434D',
                width: 22,
                height: 22,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.phoneBox}>
          <VectorImage
            source={require('../../assets/phone.svg')}
            style={{
              tintColor: '#34434D',
              width: 22,
              height: 22,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={styles.title}>Phone</Text>
            <Text style={styles.userInformation}>{item.phone}</Text>
          </View>
        </View>
        <View style={styles.information}>
          <VectorImage
            source={require('../../assets/information.svg')}
            style={{
              tintColor: '#34434D',
              width: 22,
              height: 22,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={styles.title}>Info</Text>
            <Text style={styles.userInformation}>{item.status}</Text>
          </View>
        </View>
        <View style={styles.information}>
          <VectorImage
            source={require('../../assets/eye-on.svg')}
            style={{
              tintColor: '#34434D',
              width: 22,
              height: 22,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={styles.title}>Last seen</Text>
            <Text style={styles.userInformation}>
              {item.lastSeen}
            </Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.modalBox}>
          <View
            style={styles.modalStyle}>
            <EditName displayName={name} onSubmit={updateName} />
            <View style={styles.iconCloseBox}>
              <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
                <VectorImage
                  source={require('../../assets/close.svg')}
                  style={{
                    tintColor: '#34434D',
                    width: 22,
                    height: 22,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Settings;
