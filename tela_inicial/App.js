import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import DoctorCard from './components/DoctorCard';

const servicos = [
  { id: '1', nome: 'Consultation', icon: 'account-box-outline' },
  { id: '2', nome: 'Dentist', icon: 'tooth-outline' },
  { id: '3', nome: 'Cardiologist', icon: 'heart-pulse' },
  { id: '4', nome: 'Hospital', icon: 'hospital-building' },
  { id: '5', nome: 'Emergency', icon: 'ambulance' },
  { id: '6', nome: 'Laboratory', icon: 'test-tube' },
];

const doutores =[
  {id: '1', nome: 'dr. Olivia Wilson', tipo: 'Consultant', especializacao: 'Physiotherapy' },
  {id: '2', nome: 'dr. Jonathan Patterson', tipo: 'Consultant', especializacao: 'Internal Medicine'}
]

export default function App() {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <Icon name={item.icon} size={40} color="#5063EE" />
      <Text style={styles.label}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Avatar
        size="small"
        rounded
        source={{
          uri:
            'https://www.w3schools.com/howto/img_avatar.png'
        }}/> <Text style={styles.string}>Welcome Dani Martinez</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Search doctor' placeholderTextColor="#999"></TextInput>
          <TouchableOpacity style={styles.iconContainer}><Icon name='magnify' size={24} color={'blue'}/></TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
      <Text>Categories</Text> <TouchableOpacity><Text style={{textAlign: 'right'}}>Show all</Text></TouchableOpacity>
      <FlatList
        data={servicos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
      <View>
        <Text>Top doctors</Text>
        <FlatList
          data={doutores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DoctorCard doutor={item} />}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        />
      </View>
      <View style={styles.downContainer}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name='home-outline' color={'white'} size={40} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name='stethoscope' color={'white'} size={40} />
          <Text style={styles.navText}>Doctors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name='calendar-month-outline' color={'white'} size={40} />
          <Text style={styles.navText}>Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name='account-outline' color={'white'} size={40} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },

  string: {
    color: 'white',
    flexDirection: 'row',
  },

  topContainer: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    padding: 40,
    borderRadius: 10,
  },

  downContainer: {
   backgroundColor: 'dodgerblue',
   flexDirection: 'row',
   justifyContent: 'space-around',
   padding: 15,
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
    paddingLeft: 150,
  },

  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  
});
