import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Avatar
        size="small"
        rounded
        source={{
          uri:
            'https://www.w3schools.com/howto/img_avatar.png'
        }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Search doctor' placeholderTextColor="#999"></TextInput>
          <TouchableOpacity style={styles.iconContainer}><Icon name='search' size={24} color={'blue'}/></TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    width: 300,
    backgroundColor: '#fff',
  },

  input: {
    color: '#000',
  },

  iconContainer: {
    paddingLeft: 90,
  }
});
