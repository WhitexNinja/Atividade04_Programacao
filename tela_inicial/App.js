import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
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
  {id: '1', nome: 'dr. Olivia Wilson', tipo: 'Consultant', especializacao: 'Physiotherapy', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  {id: '2', nome: 'dr. Jonathan Patterson', tipo: 'Consultant', especializacao: 'Internal Medicine', avatar: 'https://randomuser.me/api/portraits/men/32.jpg'}
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
        <View style={styles.contaContainer}>
      <Avatar
        size="medium"
        rounded
        source={{
          uri:
            'https://www.w3schools.com/howto/img_avatar.png'
        }}/> 
        
        <View style={styles.textContainer}>
        <Text style={{fontSize: 16, color: 'white', fontWeight: 450}}>Welcome</Text>
        <Text style={{fontSize: 14, color: 'white'}}>Dani Martinez</Text>
        </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Search doctor' placeholderTextColor="#999"></TextInput>
          <TouchableOpacity style={styles.iconContainer}><Icon name='magnify' size={24} color={'blue'}/></TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>

      <ScrollView style={styles.scrollArea} contentContainerStyle={{paddingBottom: 120}}>
      <View style={{paddingHorizontal: 16}}>
      <View style={styles.categoriesHeader}>
      <Text style={{fontWeight: 600, fontSize: 18, marginLeft: 12.5}}>Categories</Text> <TouchableOpacity><Text style={{textAlign: 'right', fontWeight: 600, fontSize: 18, marginEnd: 12.5}}>Show All</Text></TouchableOpacity>
      </View>

      <FlatList
        data={servicos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
        scrollEnabled={false}
      />

        <Text style={styles.titles}>Top doctors</Text>
        <FlatList
          data={doutores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DoctorCard doutor={item} />}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        />
      </View>
      </ScrollView>

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

  contaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  textContainer: {
    marginLeft: 10,
  },

  scrollArea: {
    flex: 1,
  },

  string: {
    color: 'white',
    flexDirection: 'row',
  },

  titles: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10

  },

  topContainer: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    padding: 40,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    color: '#000',
  },

  iconContainer: {
    paddingLeft: 10,
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
  
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  }

});
